import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root , {action as rootAction, loader as rootLoader } from "./screens/Root/Root.jsx";
import Search, {loader as searchLoader}  from "./screens/Search/Search.jsx"; 
import ErrorPage from "./screens/Error/Error.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        element: <Search />,
        path: "/search/:term/:page",
        loader: searchLoader 
        // loader: fetchSearch({term, params})
      }

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
