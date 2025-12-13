import React from 'react'
import {Routes,Route} from 'react-router-dom'

function Routing() {
  return (
    <div>
        <nav>
          <ul>
              <li>Home Page</li>
              <li>About</li>
              <li>Listing</li>
          </ul>
        </nav>
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/Listing" element={<Listing></Listing>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </div> 
  )
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