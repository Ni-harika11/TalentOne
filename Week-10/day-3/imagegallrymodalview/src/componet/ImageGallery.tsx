import React, { useState } from "react";

const images = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", // Beach
    "https://images.unsplash.com/photo-1519681393784-d120267933ba", // Mountains
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", // Beach
    "https://images.unsplash.com/photo-1519681393784-d120267933ba", // City
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  ];
const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string >();

  const openModal = (img: string) => setSelectedImage(img);
  const closeModal = () => setSelectedImage('');

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-6">Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            // alt={`Thumbnail ${index}`}
            className="w-full h-40 object-cover rounded cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(img)}
            style={{width:'300px', height:'300px'}}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-black"
              onClick={closeModal}
            > ❌
            </button>
            <img
              src={selectedImage}
              alt="Full Preview"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
