import { useEffect, useState } from "react";
import { checkPathGif } from "../../services/helpers";
import "./SearchItem.css";

function SearchItem({item, size}) {
  const [focus, setFocus] = useState(false);
  const [imgCheck, setImgCheck] = useState(false);
  const [imgPath, setImgPath] = useState('');

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

  const handleImgPath = (obj) => {
    // if a .gif or no cover image print item.title
    // get img path
    const img = obj.cover_image;
    // check to see if conver image exists and if its not a gif
    if(img && !checkPathGif(img) ) {
      setImgCheck(true);
      return img;
    } else {
      setImgCheck(false);
    }
  }

  useEffect(() => {
    const path = handleImgPath(item);
    setImgPath( path );
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
        {
          (imgCheck) ?
            <img
              id="img-SearchItem"
              className={(focus) ? "focus" : null}
              onClick={handleClick}
              src={imgPath} 
              alt={`cover for ${item.title}`} 
            />
          :
            <p 
              id="p-SearchItem"
              className={(focus) ? "focus" : null}
              onClick={handleClick}
            >{item.title}</p>
        }
      </div>
    </div>
  )
}

export default SearchItem