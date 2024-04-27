import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import axios from "axios";
import "./Search.css"; 

const base = "https://api.discogs.com";

function Search({ handleSubmit }) {
  const {term, page} = useParams();
  // on mount
  useEffect(() => {
    console.log("term", term);
    console.log("page", page);
  },[term,page])

  return (
    <div id="root-Search">
      <SearchBar handleSubmit={handleSubmit} /> 
    </div>
  )
}

export default Search