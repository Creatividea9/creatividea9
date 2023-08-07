import React from 'react';
import Product from './Product';

    const Gallery = () => {
        const galleries = [
          ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img1.jpeg', 'img1.jpeg'], // Gallery 1 with 5 images
          ['img4.jpg', 'img1.jpeg', 'img4.jpg'], // Gallery 2 with 3 images
          ['img4.jpg', 'img1.jpeg', 'img4.jpg'], // Gallery 3 with 3 images
          // Add more galleries with their respective images as needed
          ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img1.jpeg', 'img1.jpeg'], // Gallery 1 with 5 images
          ['img4.jpg', 'img1.jpeg', 'img2.jpeg'], // Gallery 2 with 3 images
          ['img3.jpeg', 'img2.jpeg', 'img4.jpg'],
        ];
      
        return (
          <div>
            <h1>Product Gallery</h1>
            <div className="product-galleries">
              {galleries.map((gallery, index) => (
                <Product key={index} gallery={gallery} />
              ))}
            </div>
          </div>
        );
      };
      
      export default Gallery;
