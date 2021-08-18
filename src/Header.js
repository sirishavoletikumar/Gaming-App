import React from 'react'
import {Link}  from 'react-router-dom'

function Header(){
    return(
        <div>
          <Link to="/">Home</Link>{" "}
          <Link to="/About">About</Link>{" "}
          <Link to="/Blog">Blog</Link>{" "}
          <Link to="/blogredux/react">Blogredux</Link> 
        </div>
    )
}
export default Header