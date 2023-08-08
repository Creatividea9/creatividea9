import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    
    <div className='nav'>
      
      <h1 style={{color:'white'}} >Creatividea9</h1>
      <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     
     <Link to="/items">Item</Link>
     <Link to="/youtube">Video</Link>
    </div>
    
  )
}

export default Navbar
