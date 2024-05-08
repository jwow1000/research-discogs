import { useNavigate, useLoaderData } from "react-router-dom";
import SearchItem from "../../components/SearchItem/SearchItem.jsx";
import { getRandomInt } from "../../services/myMath.js";
import { fetchSearch } from "../../services/apiCalls.js";
import "./Search.css"; 


function Search() {
  // get the loader data
  const searchResults = useLoaderData();
  // parse the array out of results
  const dataArray = searchResults.results;
  // console.log("searchResults", searchResults.results)
  // navigate function
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