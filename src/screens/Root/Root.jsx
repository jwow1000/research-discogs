import { 
  Outlet, 
  Form, 
  redirect,
  useParams,
  useLoaderData
} from "react-router-dom";

import { useState, useEffect } from 'react';
import { fetchRandom, fetchReleaseMax } from "../../services/apiCalls.js";
import './Root.css';

let randoMax = 1;
// random release call
const handleRandom = async () => {
  try {
    const rando = await fetchRandom(randoMax);
    console.log(rando?.title);
    let term = "";
    
    if(rando.artists) {
      term += `${rando.artists[0].name} `;
    } 
    if(rando.title) {
      term += `${rando.title} `;
      return term;  
    } 
    if(rando.name) {
      term += `${rando.name}`;
      return term;
    }
    return term;

  } catch(error) {
    console.error(error);
  }
  
}

// Roots form action to re-render Search.jsx
export async function action({ request, params }) {
  console.log("params", params, request)
  // get the formData
  const formData = await request.formData();
  // check to see what button
  if( formData.has("random-button") ) {
    const term = await handleRandom();
    return redirect(`search/${term}/1`); 
  } else {
    const term = formData.get("search-bar");
    if(term) {
      return redirect(`search/${term}/1`);
    } else {
      alert("search bar empty!");
      return null;
    }
  }
}

function Root() {
  // get the loader data
  const loaderData = useLoaderData();
  randoMax = loaderData;
  // states
  const [searchTerm, setSearchTerm] = useState("");
  // const submitElement = useRef();
  const params = useParams();

  useEffect( () => {
    setSearchTerm( params.term );

  }, [params.term]);

  const handleChange = (e) => {
    setSearchTerm( e.target.value );
  }

  return (
    <div id="root-Root">
      {/* <a href="https://open.spotify.com/search/love%20inc.">JILL!</a> */}
      <div id="formContainer-Root">
        <Form 
          method="post"
          id="form-Root"
        >
          <label id="label-Root">
            Search A Term
            <br/>
            <input 
              id="input-Root"
              placeholder="Example: Bach"
              type="text" 
              name="search-bar"
              value={searchTerm}
              onChange={handleChange}
            />  
          </label>
          <button 
            type="submit" 
            id="submitButt-Root" 
            name="submit-button"
            value="submit-button"
          >search</button>
          
          <button 
            type="submit" 
            id="randomButt-Root"
            onClick={handleRandom}
            name="random-button"
            value="random-butt"
          >get random release!</button>
        </Form>
      </div>
      <div id="detail-Root">
        <Outlet />
      </div>
    </div>
  )
}

export default Root;

// the loader grabbing term and page params
export async function loader( ) {
  try {
    const results = await fetchReleaseMax();
    console.log( "root loader results", results );
    return results;

  } catch (error) {
    return console.error(error);
  }
};