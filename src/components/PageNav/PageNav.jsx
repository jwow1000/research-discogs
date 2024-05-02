import { useEffect, useState } from "react";
import "./PageNav.css";

function PageNav( {pageAmt, setPageIdx, pageIdx }) {
  const [pageArray, setPageArray] = useState([]);

  useEffect(() => {
    let arr = [];
    for(let i=0; i<pageAmt; i++) {
      arr[i] = i+1;
    }
    setPageArray(arr);
  }, [pageAmt]) 
  
  console.log("index of page in PageNav",pageIdx)
  
  function linkClass(item) {
    return (pageIdx === item) ? "linksActive-PageNav" : "links-PageNav"
  }

  return (
    <div id="root-PageNav">
      {
        pageArray && pageArray.map((item, idx) => {
          // console.log("item idx?", item, idx, pageIdx)
          return (<div 
            className={linkClass(item)}
            key={idx}
            onClick={ () => {setPageIdx(item)} }
          >
            {item}
          </div> ) 
        })
      }
    </div>
  )
}

export default PageNav