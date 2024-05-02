import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import SearchItem from "../../components/SearchItem/SearchItem.jsx";
import PageNav from "../../components/PageNav/PageNav.jsx";
import { getRandomInt } from "../../services/myMath.js";
import axios from "axios";
import "./Search.css"; 

const base = "https://api.discogs.com";
const project = "reSearchDiscogs/1.1 +https://github.com/jwow1000/research-discogs"
const token = process.env.REACT_APP_API_TOKEN;
const headers = { headers: {'User-Agent': project } };


function Search() {
  console.log('did search open up?')
  const navigate = useNavigate();
  // get the Params form the url
  const {term, page} = useParams();
  // useStates
  const [searchResults, setSearchResults] = useState([]);
  const [pageAmt, setPageAmt] = useState(0);
  const [pageIdx, setPageIdx] = useState(1);
  
  async function fetchSearch(sTerm, pageNum) {
    try {
      const response = await axios.get(
        `${base}/database/search?q=${sTerm}&type=all&token=${token}&page=${pageNum}&per_page=20`,
        headers
      );
      // return the response data 
      setSearchResults( response.data );
      
      // set the page amount
      const p = response.data.pagination.pages;
      const setP = (p > 10) ? 10 : p;
      setPageAmt(setP);
  
    } catch (error) {
      console.log(error);
    }
  
  };
  
  // use effect for new params 
  useEffect(() => {
    // console.log("Search print: ", term, page, token)
    // call the function
    fetchSearch(term, page);
    setPageIdx(page);
    console.log("pageCHange", pageIdx)
  },[term, page])
  
  // use effect for new page 
  
    const str = `../search/${term}/${pageIdx}`;
    // console.log("nav string", str)
    navigate(str);
  
  

  return (
    <div id="root-Search">
      <SearchBar state={term}/> 
      <PageNav 
        pageIdx={page}
        setPageIdx={setPageIdx} 
        pageAmt={pageAmt}
      />
      <div id="gallery-Search">
        {
          (searchResults.results) ?
            searchResults.results.map((item, idx) => (
            <SearchItem 
              item={item}
              key={idx}
              size={`${getRandomInt(5,20)}rem`}
            />
            ))
          :
            null
        }
      </div>
    </div>
  )
}

export default Search