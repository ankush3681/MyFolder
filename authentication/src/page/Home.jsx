import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"blue",padding:".2rem 0"}}>
            <Link to="/"><p style={{fontSize:"20px",color:"white",textDecoration:"none"}}>Home</p></Link>
            <Link to="/login"><p style={{fontSize:"20px",color:"white",textDecoration:"none"}}>Login</p></Link>
            <Link to="/signup"><p style={{fontSize:"20px",color:"white",textDecoration:"none"}}>Signup</p></Link>
        </nav>
      <h1>This is home page</h1>
    </div>
  )
}

export default Home
