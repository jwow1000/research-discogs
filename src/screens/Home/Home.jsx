import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { Outlet } from "react-router-dom";
import './Home.css';

function Home() {
  
  return (
    <div id="root-Home">
      <SearchBar />
      <div id="detail-Home">
        <Outlet />
      </div>
    </div>
  )
}

export default Home