import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  };

  useEffect(() => {
    // Automatically switch slides every 3 seconds
    const interval = setInterval(() => {
      plusSlides(1);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slideIndex]); // Include slideIndex as a dependency to re-run the effect when it changes

  return (
    <div>
      <style>
        {`
          * {box-sizing: border-box}

          /* Slideshow container */
          .slideshow-container {
            max-width: 1000px;
            position: relative;
            margin: auto;
          }

          /* Hide the images by default */
          .mySlides {
            display: none;
          }

        

         

          /* Caption text */
          .text {
            color: #f2f2f2;
            font-size: 15px;
            padding: 8px 12px;
            position: absolute;
            bottom: 8px;
            width: 100%;
            text-align: center;
          }

          /* Number text (1/3 etc) */
          .numbertext {
            color: #f2f2f2;
            font-size: 12px;
            padding: 8px 12px;
            position: absolute;
            top: 0;
          }

          /* The dots/bullets/indicators */
          .dot {
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
          }

          .active, .dot:hover {
            background-color: #717171;
          }

          /* Fading animation */
          .fade {
            animation-name: fade;
            animation-duration: 1.5s;
          }

          @keyframes fade {
            from { opacity: .4 }
            to { opacity: 1 }
          }
        `}
      </style>
      {/* Slideshow container */}
      <div className="slideshow-container">
        {/* Full-width images with number and caption text */}
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="img4.jpg" style={{ width: '100%' }} alt="Slide 1" />
          
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="img2.jpeg" style={{ width: '50%' }} alt="Slide 2" />
         
        </div>
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="img3.jpeg" style={{ width: '50%' }} alt="Slide 3" />
          
        </div>
        
      </div>
      <br />
      {/* The dots/circles */}
      <div style={{ textAlign: 'center' }}>
        <span
          className="dot"
          onClick={() => currentSlide(1)}
        />
        <span
          className="dot"
          onClick={() => currentSlide(2)}
        />
        <span
          className="dot"
          onClick={() => currentSlide(3)}
        />
      </div>
    </div>
  );
};

export default Banner;
