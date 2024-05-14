import { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import SearchItem from "../../components/SearchItem/SearchItem.jsx";
import PageNav from "../../components/PageNav/PageNav.jsx";
import { getRandomInt } from "../../services/myMath.js";
import { fetchSearch } from "../../services/apiCalls.js";
import "./Search.css"; 


function Search() {
  const [pageIdx, setPageIdx] = useState(0);
  // get the loader data
  const loaderData = useLoaderData();
  
  const searchResults = loaderData.results;
  const searchTerm = loaderData.term;

  console.log("lets look at the results", searchResults)
  const getPages = searchResults.pagination.pages;
  const getPage = searchResults.pagination.page;
  const pageAmt = (getPages > 10) ? 10 : getPages;
  
  useEffect(() => {
    setPageIdx( getPage ); 
  }, [getPage])
  


  // parse the array out of results
  const dataArray = searchResults;
  // console.log("searchResults", searchResults.results)
  // navigate function
  const navigate = useNavigate();

  if (navigate.state === "loading") {
    return <h1>Loading!</h1>;
  }

  return (
    <div id="root-Search">
      <PageNav 
        pageAmt={pageAmt}
        pageIdx={pageIdx}
        searchTerm={searchTerm}
      />
      <div id="gallery-Search">
        {
          (searchResults && dataArray) ?
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
      <PageNav 
        pageAmt={pageAmt}
        pageIdx={pageIdx}
        searchTerm={searchTerm}
      />
      
    </div>
  )
}

export default Search;

// the loader grabbing term and page params
export async function loader( {params} ) {
  try {
    const results = await fetchSearch(params.term, params.page);
    return { "results": results, "term": params.term };

  } catch (error) {
    return {"results": null, "term": params.term}
  }
};