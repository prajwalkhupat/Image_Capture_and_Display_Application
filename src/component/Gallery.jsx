import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ photos }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [photosArray, setPhotosArray] = useState(photos);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleDelete = (index) => {
    
    const updatedPhotos = [...photosArray];
    updatedPhotos.splice(index, 1);
    setPhotosArray(updatedPhotos);
    photos.splice(index,1)
  };

  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery-container">
        {photosArray.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img
              src={photo}
              alt={`Photo ${index}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease',
                height: "100px",
                borderRadius:"5px"
              }}
            />
            <button onClick={() => handleDelete(index)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;