import React from 'react';
import './Hover.css'; // Import the CSS file for styling

const Hover = () => {
  return (
    <div>
      
      <div className="box">
        <img src="logo.jpeg" alt="" />
        <div className="box-content">
          <div className="content">
            <ul className="social">
              <li><a href="https://www.instagram.com/creatividea9/?hl=en"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.facebook.com/people/Creatividea9/100064235943852/"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://www.youtube.com/@Creatividea9"><i className="fab fa-youtube"></i></a></li>
            </ul>
            <h3 className="title">Krishna Deora</h3>
            <span className="post">Creatividea9</span>
          </div>
          
        </div>
    
      
    </div>
    </div>
    
  );
};

export default Hover;
