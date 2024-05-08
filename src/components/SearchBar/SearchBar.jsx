import { useState } from 'react';
import { useNavigate, Form } from 'react-router-dom';
import './SearchBar.css'

// use a handle submit function as prop with a searchterm paramater
function SearchBar({ setSearchTerm }) {
  const navigate = useNavigate();
  
  const [term, setTerm] = useState("");

  // handle the state change of the searchTerm
  const handleChange = (e) => {
    setTerm( e.target.value );
  }
  
  // handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const term = e.target[0].value;
    const str = `../search/${term}/1`;
    // console.log("nav string", str)
    navigate(str);
  };


  return (
    <div id="root-SearchBar">

      <Form 
        onSubmit={ handleSubmit }
        id="form-SearchBar"
      >
        <label >
          Search A Term
          <input 
            id="input-SearchBar"
            onChange={handleChange}
            type="text" 
            value={term}
            autoComplete='off'
          />  
        </label>
      </Form>
    </div>
  )
}

export default SearchBar