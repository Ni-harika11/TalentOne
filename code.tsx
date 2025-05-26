// 7. Image Gallery with Modal Preview
//  Description: Build an image gallery where clicking on a thumbnail opens a modal with a full-sized image.
//  Bonus: Add a close button and background click to close.
//  Concepts: React, useState, conditional rendering, modal logic
// 1. ImageGallery.tsx – Main Component
import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  'https://via.placeholder.com/150/92c952',
  'https://via.placeholder.com/150/771796',
  'https://via.placeholder.com/150/24f355',
  'https://via.placeholder.com/150/d32776',
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2>Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onClick={() => openModal(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Full Preview" className="full-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
