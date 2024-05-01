import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./PageNav.css";

function PageNav({pageAmt, setPageChange, pageChange}) {
  const [pageArray, setPageArray] = useState([]);
  
  useEffect(() => {
    let arr = [];
    for(let i=0; i<pageAmt; i++) {
      arr[i] = i+1;
    }
    setPageArray(arr);
  }, [pageAmt]) 

  return (
    <div id="root-PageNav">
      {
        pageArray && pageArray.map((item, idx) => (
          <div 
            className={(pageChange === item) ? "linksActive-PageNav" : "links-PageNav"}
            key={idx}
            onClick={ () => {setPageChange(item)} }
          >
            {item}
          </div>  
        ))
      }
    </div>
  )
}

export default PageNav