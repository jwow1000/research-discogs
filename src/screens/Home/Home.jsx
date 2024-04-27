import { NavLink } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import './Home.css';

function Home({ handleSubmit }) {
  
  return (
    <div id="root-Home">
      <SearchBar handleSubmit={handleSubmit} />
    </div>
  )
}

export default Home