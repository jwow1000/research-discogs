import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import axios from "axios";
import Search from "./screens/Search/Search.jsx";
import Home from "./screens/Home/Home.jsx";
import "./App.css";

const base = "https://api.discogs.com";
const project = "reSearchDiscogs/1.1 +https://github.com/jwow1000/research-discogs"
const token = process.env.REACT_APP_API_TOKEN;
const headers = { headers: {'User-Agent': project } };

function App() {
  useEffect(() => {
    async function fetchReleaseMax() {
      try {
        const response = await axios.get(
          `${base}/database/search?&sort=date_added&type=release&token=${token}&page=1&per_page=1`,
          headers
        );
        // return the response data 
        // setSearchResults( response.data );
        console.log("max release id?", response);

      } catch (error) {
        console.log(error);
      }
    
    };
    // call the function
    fetchReleaseMax();

  }, []) 

  return (
    <Fragment>
      <Routes id="routes-App">
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route
          path="/search/:term/:page"
          element={<Search />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
