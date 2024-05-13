import { useEffect, useState } from "react";
import { checkPathGif } from "../../services/helpers";
import axios from "axios";
import "./SearchItem.css";

const project = "reSearchDiscogs/1.1 +https://github.com/jwow1000/research-discogs"

function SearchItem({item, size}) {
  const [focus, setFocus] = useState(false);
  const [imgCheck, setImgCheck] = useState(false);
  const [imgPath, setImgPath] = useState('');
  const [resUrl, setResUrl] = useState('');
  const [uri, setUri] = useState('');
  
  // console.log("lemme see", item);
  useEffect(() => {
    const path = handleImgPath(item);
    setImgPath( path );
    setResUrl( item.resource_url );
    setUri( `https://www.discogs.com${item.uri}`)
  }, [item])

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

  // fetch call to take user to first youtube link
  function handleVideoLink() {
    async function fetchVideoLink() {
      // console.log("wahttt", `${resUrl}&token=${token}`)
      try {
        const response = await axios.get(
          `${resUrl}`, {
          headers: {
            "User-Agent": project
          },
        });
        // console.log(response.data);
        const point = response.data.videos;
        if (point) {
          const path = point[0].uri;
          // console.log("path", path);
          window.open(path, "discogs_link", 'noopener noreferrer');
        } else {
          alert("no videos available");
        }
      } catch(error) {
        console.log(error);
      }
    }
    fetchVideoLink();
  }

  function handleDiscLink() {
    const path = uri;
    // console.log("discogs path", path, uri);
    window.open(path, "discogs_link", 'noopener noreferrer');
  }
  function handleSpotifyLink() {
    let term = "";
    if(item.title) {
      term = item.title;
    } else if(item.name) {
      term = item.name
    }
    const link = `https://open.spotify.com/search/${term}`;
    // const link = `spotify:search:${term}`;
    window.open(link, "discogs_link", 'noopener noreferrer');
  }

  function Links() {
    if (focus) {
      return (
        <div>
          <div className="links-SearchItem" id="dicogsLink-SearchItem" onClick={handleDiscLink}>
            discogs
          </div>
          <div className="links-SearchItem" id="researchLink-SearchItem" onClick={handleSpotifyLink}>
            spotify 
          </div>
          <div className="links-SearchItem" id="youtubeLink-SearchItem" onClick={handleVideoLink}>
            youtube
          </div>
        </div>
      );
    }
  }

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
      {
        focus &&
        <Links />
      }
    </div>
  )
}

export default SearchItem