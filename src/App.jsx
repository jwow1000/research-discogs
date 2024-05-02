import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./screens/Home/Home.jsx"
import Search from "./screens/Search/Search.jsx";
// import {fetchSearch} from "./services/apiCalls.js";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
    // put a pre-load get max amount of releases bit of code
    // for random release button  
  },
  {
    path: "/search/:term/:page",
    element: <Search />
  }
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App; 