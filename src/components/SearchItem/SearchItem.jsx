import { useEffect } from "react";
import "./SearchItem.css";

function SearchItem({item, size}) {
  useEffect(() => {
    console.log(item);
  }, [item])
  
  return (
    <div 
      id="root-SearchItem"
      style={{
        "width": size,
        "height": size
      }}
    >
      <img 
        id="img-SearchItem"
        src={item.cover_image} 
        alt={`cover for ${item.title}`} 
      />
    </div>
  )
}

export default SearchItem