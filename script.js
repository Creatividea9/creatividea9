document.addEventListener('DOMContentLoaded', () => {
    const products = [
      { images: ['product1-img1.jpg', 'product1-img2.jpg', 'product1-img3.jpg'], title: 'Product 1 Title' },
      { images: ['product2-img1.jpg', 'product2-img2.jpg', 'product2-img3.jpg'], title: 'Product 2 Title' },
      
      // Add more products with their respective images and titles
    ];
  
  
    var swiper = new Swiper('.swiper-container.two', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
      }
    });
    
    // Auto slide every 2 seconds
    setInterval(function () {
      swiper.slideNext();
    }, 2000);
    
  
  
  
  
    products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      
      const galleryContainer = document.createElement('div');
      galleryContainer.classList.add('gallery-container');
      
      const prevButton = document.createElement('button');
      prevButton.classList.add('prev-button');
      prevButton.innerHTML = '&#8249;';
      
      const img = document.createElement('img');
      img.src = product.images[0];
      img.alt = `${product.title} - Image 1`;
      
      const nextButton = document.createElement('button');
      nextButton.classList.add('next-button');
      nextButton.innerHTML = '&#8250;';
      
      const description = document.createElement('div');
      description.classList.add('description');
      
      const h2 = document.createElement('h2');
      h2.textContent = product.title;
      
      galleryContainer.appendChild(prevButton);
      galleryContainer.appendChild(img);
      galleryContainer.appendChild(nextButton);
      
      description.appendChild(h2);
      
      productCard.appendChild(galleryContainer);
      productCard.appendChild(description);
      
      document.querySelector('.product-galleries').appendChild(productCard);
    });
  
    // Add your event listeners and functionality for prev/next buttons here
  });
  
  /* banner */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

  


  /* banner */





  /* Count Down */
  var countDownDate = new Date("April 7, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



 /* Count Down */

 /* Products */







 /* banner other */


 document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const sliderImages = document.querySelectorAll(".slider img");

  let currentIndex = 0;
  const intervalTime = 5000; // Slide interval in milliseconds

  // Function to start the slider
  function startSlider() {
      setInterval(() => {
          currentIndex = currentIndex < sliderImages.length - 1 ? currentIndex + 1 : 0;
          slideImage();
      }, intervalTime);
  }

  // Function to slide images
  function slideImage() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Call startSlider function to begin sliding
  startSlider();
});
