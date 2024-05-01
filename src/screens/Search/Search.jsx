import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  // get the Params form the url
  const {term, page} = useParams();
  // useStates
  const [searchResults, setSearchResults] = useState([]);
  const [pageAmt, setPageAmt] = useState(0);
  const [pageChange, setPageChange] = useState(1);
  
  async function fetchSearch(sTerm, pageNum) {
    try {
      const response = await axios.get(
        `${base}/database/search?q=${sTerm}&type=all&token=${token}&page=${pageNum}&per_page=20`,
        headers
      );
      // return the response data 
      setSearchResults( response.data );
      // set the page number
      setPageChange(pageNum);
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
    console.log("Search print: ", term, page, token)
    // call the function
    fetchSearch(term, page);
  },[term, page])

  useEffect(() => {
    fetchSearch(term, pageChange);
  },[pageChange])

  return (
    <div id="root-Search">
      <SearchBar state={term}/> 
      <PageNav 
        setPageChange={setPageChange} 
        pageChange={pageChange}
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