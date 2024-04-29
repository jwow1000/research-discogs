import { useEffect, useState } from "react";
import "./SearchItem.css";

function SearchItem({item, size}) {
  const [focus, setFocus] = useState(false);
  
  const handleClick = () => {
    if(focus) {
      setFocus(false)
    } else {
      setFocus(true)
    }
  }
  
  const handleDivClick = () => {
    if(focus) {
      setFocus(false);
    }
  }

  useEffect(() => {
  }, [item])

  return (
    <div 
      id="root-SearchItem"
      style={{
        "width": size,
        "height": size
      }}
    >
      <div 
        id="imgContainer-SearchItem"
        className={(focus) ? "focus" : null}
        onClick={handleDivClick}
      >
        <img
          id="img-SearchItem"
          className={(focus) ? "focus" : null}
          onClick={handleClick}
          src={item.cover_image} 
          alt={`cover for ${item.title}`} 
        />
      </div>
    </div>
  )
}

export default SearchItem