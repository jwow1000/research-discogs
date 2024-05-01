import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageNav from '../PageNav/PageNav.jsx';
import './SearchBar.css'

// use a handle submit function as prop with a searchterm paramater
function SearchBar({ state }) {
  const navigate = useNavigate();
  
  // states
  const [searchTerm, setSearchTerm] = useState("");

  // handle the state change of the searchTerm
  const handleChange = (e) => {
    setSearchTerm( e.target.value );
  }
  
  // handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const term = e.target[0].value;
    const str = `../search/${term}/1`;
    // console.log("nav string", str)
    navigate(str);
  };

  useEffect(() => {
    if(state) {
      setSearchTerm(state);
    }
  }, [state])

  return (
    <form 
      onSubmit={ handleSubmit }
      id="form-SearchBar"
    >
      <label >
        Search A Term
        <input 
          id="input-SearchBar"
          onChange={handleChange}
          type="text" 
          value={searchTerm}
          autoComplete='off'
        />  
      </label>
    </form>
  )
}

export default SearchBar