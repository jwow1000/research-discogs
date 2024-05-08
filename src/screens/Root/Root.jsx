import { 
  Outlet, 
  Form, 
  redirect
} from "react-router-dom";
import './Root.css';

// action function to re-render Search.jsx
export async function action({ request, params }) {
  console.log("is this triggered? Root action")
  const formData = await request.formData();
  const term = formData.get("search-bar");
  return redirect(`search/${term}/1`);
}

function Root() {
  // states
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <div id="root-Root">
      <div id="formContainer-Root">
      <Form 
        method="post"
        id="form-Root"
      >
        <label >
          Search A Term
          <input 
            id="input-SearchBar"
            placeholder="Example: Bach"
            type="text" 
            name="search-bar"
          />  
        </label>
        <button type="submit">search</button>
      </Form>
      </div>
      <div id="detail-Root">
        <Outlet />
      </div>
    </div>
  )
}

export default Root