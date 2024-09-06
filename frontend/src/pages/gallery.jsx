import React from 'react';
import './gallery.css'; // Import the CSS file
import image1 from '../images/gallery/gallery1.jpg'; // Adjust the path based on your project structure
import image2 from '../images/gallery/gallery2.jpg';
import image3 from '../images/gallery/gallery4.jpg';
// import image1 from images/gallery/gallery1;

const Gallery = () => {
  // Sample product data
  const products = [
    {
      name: 'The Commuter',
      price: 'R450 PER DAY',
      range: 'Range per charge - 60kms',
      speed: 'Speed - 65km/h',
      charging: 'Charging time - 3 hours in a normal wall socket',
      imageUrl: image1 // Replace with actual image URL
    },
    {
      name: 'The Ghost',
      price: 'R850 PER DAY',
      range: 'Range per charge - 100kms',
      speed: 'Speed - 90km/h',
      charging: 'Charging time - 3 hours in a normal wall socket',
      colors: 'Available in Black or White',
      imageUrl: image2// Replace with actual image URL
    },
    {
      name: 'The Retro Racer',
      price: 'R999 PER DAY',
      range: 'Range per charge - 100kms',
      speed: 'Speed - 90km/h',
      charging: 'Charging time - 3 hours in a normal wall socket',
      colors: 'Available in Black or Green',
      imageUrl: image3 // Replace with actual image URL
    },
  ];

  return (
    <div className="gallery-container">
      {products.map((product, index) => (
        <div
          className={`gallery-item ${index % 2 === 0 ? 'row-reverse' : ''}`}
          key={index}
        >
          <img src={product.imageUrl} alt={product.name} className="gallery-image" />
          <div className="gallery-details">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.range}</p>
            <p>{product.speed}</p>
            <p>{product.charging}</p>
            {product.colors && <p>{product.colors}</p>}
            <button className="rent-button">RENT NOW</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
