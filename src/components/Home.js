import React from 'react'
import Banner from './Banner'
import Hover from './Hover'
import Gallery from './Gallery'
import Footer from './Footer'

/* import Navbar from './Navbar' */

function Home() {
  return (
    <div>
       <h1 style={{color:'black'}} >Creatividea9</h1>
      <Hover/>

     
      
      
        <Banner/>
    <img src="img1.jpeg"></img>
   
    
       <Gallery/>
       <Footer/>
    </div>
    
  )
}

export default Home
