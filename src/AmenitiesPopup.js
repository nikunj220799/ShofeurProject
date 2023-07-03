import React, { useState } from 'react';
import './AmenitiesPopup.css';
import image1 from './chef.jpeg';
import image2 from './bar.jpeg';
import image3 from './rooms.jpeg';
import image4 from './photo.jpeg';

const AmenitiesPopup = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4];
  const texts = ["Personalised Chef", "Open Bar", "Seafacing Rooms", "Bride  Photoshoot"];

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="arrow-container">
          <button className="arrow previous-arrow" onClick={prevImage}>
            &#8593;
          </button>
        </div>
        <div className="popup-content">
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
          <div className="text-container">
            <h2>{texts[currentIndex]}</h2>
          </div>
        </div>
        <div className="arrow-container">
          <button className="arrow next-arrow" onClick={nextImage}>
            &#8595;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesPopup;
