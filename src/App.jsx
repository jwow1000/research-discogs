import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./screens/Home/Home.jsx"
import Search from "./screens/Search/Search.jsx";
import {fetchSearch} from "./services/apiCalls.js";
import './App.css';

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/"
    // put a pre-load get max amount of releases bit of code
    // for random release button  
  },
  {
    element: <Search />,
    path: "/search/:term/:page",
    loader: async({request, params}) => {
      return fetchSearch(params.term, params.page);
    }
    // loader: fetchSearch({term, params})
  }
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App; 