import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Search from "./screens/Search/Search.jsx";
import Home from "./screens/Home/Home.jsx";
import "./App.css";

function App() {
  

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
