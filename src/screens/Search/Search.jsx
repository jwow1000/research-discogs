import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import SearchItem from "../../components/SearchItem/SearchItem.jsx";
import axios from "axios";
import { fetchSearch } from "../../services/apiCalls.js";
import "./Search.css"; 



function Search({ handleSubmit }) {
  // get the Params form the url
  const {term, page} = useParams();
  // useStates
  const [searchResults, setSearchResults] = useState([]);



  // when a term or page is updated
  useEffect(() => {
    setSearchResults( fetchSearch(term, page) );
    console.log("search results",searchResults);

  },[term,page])

  return (
    <div id="root-Search">
      <SearchBar handleSubmit={handleSubmit} /> 
      <div id="gallery-Search">
        {/* {
          (searchResults) ?
            searchResults.map((item) => (
            <SearchItem item={item}/>
            ))
          :
            null
        } */}
      </div>
    </div>
  )
}

export default Search