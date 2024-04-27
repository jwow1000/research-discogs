import { Routes, Route, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Search from "./screens/Search/Search.jsx";
import Home from "./screens/Home/Home.jsx";
import "./App.css";

function App() {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e", e.target[0].value)
    const str = `search/${e.target[0].value}/1`;
    console.log(str);
    navigate(str);
  };
  return (
    <Fragment>
      <Routes id="routes-App">
        <Route 
          path="/" 
          element={<Home handleSubmit={handleSubmit} />} 
        />
        <Route
          path="/search/:term/:page"
          element={<Search handleSubmit={handleSubmit} />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
