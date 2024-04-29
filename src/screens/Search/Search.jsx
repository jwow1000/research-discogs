import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import SearchItem from "../../components/SearchItem/SearchItem.jsx";
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

  // when a term or page is updated
  useEffect(() => {
    // console.log("Search print: ", term, page)
    // define async function with axios get
    async function fetchSearch(sTerm, pageNum) {
      try {
        const response = await axios.get(
          `${base}/database/search?q=${sTerm}&type=all&token=${token}&page=${pageNum}&per_page=10`,
          headers
        );
        // return the response data 
        setSearchResults( response.data );
    
      } catch (error) {
        console.log(error);
      }
    
    };
    // call the function
    fetchSearch(term, page);
  },[term, page])

  return (
    <div id="root-Search">
      <SearchBar state={term}/> 
      <div id="gallery-Search">
        {
          (searchResults.results) ?
            searchResults.results.map((item, idx) => (
            <SearchItem 
              item={item}
              key={idx}
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