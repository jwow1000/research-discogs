import { useEffect, useState } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import SearchItem from "../../components/SearchItem/SearchItem.jsx";
import PageNav from "../../components/PageNav/PageNav.jsx";
import { getRandomInt } from "../../services/myMath.js";
import { fetchSearch } from "../../services/apiCalls.js";
import axios from "axios";
import "./Search.css"; 




function Search() {
  // loader data
  const searchResults = useLoaderData();
  const navigate = useNavigate();
  const [pageAmt, setPageAmt] = useState(0);
  const [pageIdx, setPageIdx] = useState(1);
 
  // set page amount
  const p = searchResults.pagination.pages;
  const setP = (p > 10) ? 10 : p;
  setPageAmt(setP);
  

  // console.log('did search open up?')
  // get the Params form the url
  // // useStates
  
  // async function fetchSearch(sTerm, pageNum) {
  //   try {
  //     const response = await axios.get(
  //       `${base}/database/search?q=${sTerm}&type=all&token=${token}&page=${pageNum}&per_page=20`,
  //       headers
  //     );
  //     // return the response data 
  //     setSearchResults( response.data );
      
  //     // set the page amount
  //     const p = response.data.pagination.pages;
  //     const setP = (p > 10) ? 10 : p;
  //     setPageAmt(setP);
  
  //   } catch (error) {
  //     console.log(error);
  //   }
  
  // };
  
  // // use effect for new params 
  // useEffect(() => {
  //   // console.log("Search print: ", term, page, token)
  //   // call the function
  //   fetchSearch(term, page);
  //   setPageIdx(page);
  //   console.log("pageCHange", pageIdx)
  // },[term, page])
  
  // use effect for new page 
  
  // const str = `../search/${term}/${pageIdx}`;
  // // console.log("nav string", str)
  // navigate(str);

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

export default Search;

// the loader grabbing term and page params
export async function loader({params}) {
  const contact = await fetchSearch(params.term, params.page);
  return { contact };
};