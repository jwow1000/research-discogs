import { useState } from 'react'
import './SearchBar.css'

// use a handle submit function as prop with a searchterm paramater
function SearchBar({ handleSubmit }) {
  // states
  const [searchTerm, setSearchTerm] = useState("");
  // handle the state change of the text input
  const handleChange = (e) => {
    setSearchTerm( e.target.value);
  }

  return (
    <div id="root-SearchBar">
      <form 
        // action="search-term"
        onSubmit={ handleSubmit }
      >
        <label 
          htmlFor="input-SearchBar"
          id="label-SearchBar"
        >
          Search A Term
          <input 
            id="input-SearchBar"
            type="text" 
            value={searchTerm}
            onChange={handleChange}
            autoComplete='off'
          />  
        </label>
      </form>
    </div>
  )
}

export default SearchBar