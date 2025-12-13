import {useState,useEffect,React} from 'react'
import {Routes,Route,Link,useParams} from 'react-router-dom'

function Routing() {
  return (
    <div>
        <nav>
          <ul>
              <li>
                <Link to="/home">Home Page</Link>
              </li>
              <li>
                <Link to="/about">About Page</Link>
              </li>
              <li>
                <Link to="/Listing">Listing Page</Link>
              </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/users/:id" element={<Users isAdmin={true}></Users>}></Route>

          {/* the below path '*' is a wildcard entry */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

    </div> 
  )
  /*
  1)Normal/Static Routing
  2)Link Tag:-whenever we use it reload does not happen when we go from one page to other
  3)Dynamic Routing /Template Routing
  4)Nested Routing 
  5)Custom Routing 
  6)Redirect Routing
  */ 

  //Dynamic Routing
  function Users(props) {
    const params = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://fakestoreapi.com/users/${params.id}`
        );
        const userData = await response.json();
        console.log(userData)
        setUser(userData);
      };
      fetchData();
    },[params.id]);

    return (
    <div>
      <h3>User Component</h3>
      {user ? (
        <p>
          {user.name.firstname} {user.name.lastname}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  }
  function Home(){
    return (<h3>Home Page</h3>)
  }
  function About(){
    return (<h3>About Page</h3>)
  }
  function Listing(){
    return (<h3>Listing Page</h3>)
  }
  function PageNotFound(){
    return (<h3>Page Not Found</h3>)
  }
}

export default Routing