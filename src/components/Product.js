import React, { useState } from 'react';
import './Product.css'; // Import the CSS file for styling

const Product= ({ gallery }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % gallery.length);
    };
  
    const handlePrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + gallery.length) % gallery.length);
    };
  
    return (
      <div className="product-card">
        <div className="gallery-container">
          <button className="prev-button" onClick={handlePrevSlide}>&#8249;</button>
          <img src={gallery[currentSlide]} alt={`Item ${currentSlide + 1}`} />
          <button className="next-button" onClick={handleNextSlide}>&#8250;</button>
        </div>
        <div className="description">
          <h2>Product Title</h2>
        
        </div>
      </div>
    );
  };
  
export default Product;
