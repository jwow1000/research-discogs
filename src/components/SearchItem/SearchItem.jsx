import { useEffect } from "react";
import "./SearchItem.css";

function SearchItem({item}) {
  useEffect(() => {
    console.log(item);
  }, [item])
  
  return (
    <div id="root-SearchItem">
      <img src={item.cover_image} alt={`cover for ${item.title}`} />
    </div>
  )
}

export default SearchItem