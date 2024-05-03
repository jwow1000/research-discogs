import { useEffect, useState } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import SearchItem from "../../components/SearchItem/SearchItem.jsx";
import PageNav from "../../components/PageNav/PageNav.jsx";
import { getRandomInt } from "../../services/myMath.js";
import { fetchSearch } from "../../services/apiCalls.js";
import "./Search.css"; 


function Search() {
  // loader data
  const searchResults = useLoaderData();
  const dataArray = searchResults.results;
  console.log("searchResults", searchResults.results)
  const navigate = useNavigate();


  if (navigate.state === "loading") {
    return <h1>Loading!</h1>;
  }

  return (
    <div id="root-Search">
      {/* <PageNav 
        pageIdx={page}
        setPageIdx={setPageIdx} 
        pageAmt={pageAmt}
      /> */}
      <div id="gallery-Search">
        {
          (dataArray) ?
            dataArray.results.map((item, idx) => (
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

export default Search;

// the loader grabbing term and page params
export async function loader( {params} ) {
  const results = await fetchSearch(params.term, params.page);
  return { results };
};