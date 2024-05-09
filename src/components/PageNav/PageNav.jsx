import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./PageNav.css";

function PageNav( {pageAmt, pageIdx, searchTerm }) {
  const [pageArray, setPageArray] = useState([]);

  useEffect(() => {
    let arr = [];
    for(let i=0; i<pageAmt; i++) {
      arr[i] = i+1;
    }
    setPageArray(arr);
  }, [pageAmt]) 

  // console.log("index of page in PageNav",pageIdx)
  
  function linkClass(item) {
    return (pageIdx === item) ? "linksActive-PageNav" : "links-PageNav"
  }

  return (
    <div id="root-PageNav">
      {
        pageArray && pageArray.map((item, idx) => {
          // console.log("item idx?", item, idx, pageIdx)
          return (
            <NavLink
              style={{"textDecoration": "none"}}
              to={`../search/${searchTerm}/${item}`}
              className={linkClass(item)}
              key={idx}
            >
              {item}
            </NavLink>
            // <div 
            //   className={linkClass(item)}
            //   key={idx}
            //   onClick={ pageChange(searchTerm, item) }
            // >
            //   
            // </div> 
          ) 
        })
      }
    </div>
  )
}

export default PageNav