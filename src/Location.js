import React, { useState, useEffect } from 'react';
import './Location.css';
import Header from './Header';
import Footer from './Footer';
import Advertisement from './Advertisement';
import image1 from './island.jpeg';
import image2 from './island5.jpeg';
import image3 from './island6.jpeg';
import image4 from './island8.jpeg';
import image5 from './Helicopter.jpeg';
import image6 from './topview.jpeg';
import image7 from './boat.h';
import AmenitiesPopup from './AmenitiesPopup';

const Location = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image6, alt: 'Image 4' },
  ];

  const openPopup = () => {
    setShowPopup(true);
  };

  const showAlert = () => {
    const message = "Schedule an Interview with Nikunj Sharma for payment";
    alert(message);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
        closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Advertisement />
        <br />
        <div className="main-section">
          <div className="image-container">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="image"
            />
          </div>
          <div className="text-container">
            <h2>Whispers of Love Peninsula</h2>
            <p>
              Congratulations on finding the perfect destination for your
              wedding! At Whispers of Love Peninsula, we believe that every
              love story deserves a breathtaking backdrop, and our island
              provides just that.
            </p>
          </div>
        </div>
        <div className="banner-container">
                <div className="banner">
                <p>HOW TO GET HERE?</p>
                </div>
            </div>
            <div className="main-section">
          <div className="text-container">
            <h2>AeroLux Alliance</h2>
            <p>
            Experience the ultimate luxury and thrill on your special day with AeroLux Alliance, the perfect wedding chauffeur for your dream destination wedding on a stunning island. Soar through the skies in elegance and style, creating an unforgettable entrance that will leave your guests in awe. AeroLux Alliance offers unparalleled comfort and convenience, ensuring a seamless and magical journey as you embark on a new chapter of your life. Let this exquisite helicopter transport you to breathtaking vistas, capturing the essence of romance and adventure. Trust AeroLux Alliance to elevate your wedding experience to new heights, creating memories that will last a lifetime.
            </p>
          </div>
          <div className="image-container">
            <img
              src={image5}
              alt={'Image 5'}
              className="image"
            />
          </div>
        </div>
        <div className="main-section">    
            <div className="column">
                <h2>AeroLux Alliance Single</h2>
                <p>
                Experience the epitome of luxury with our exclusive Helicopter Escape package. Take to the skies in our state-of-the-art helicopter and embark on a breathtaking journey to our enchanting island paradise. Leave the world behind as you soar above pristine landscapes, capturing awe-inspiring views along the way. Enjoy the thrill of a private aerial tour, followed by a VIP landing at our secluded island haven. Indulge in the ultimate island escape, where tranquility and serenity await your arrival. Book now for an unforgettable adventure, available exclusively at Whispers of Love Peninsula.
                </p><br></br>
                <div className="widget">
                <h3>Helicopter Amenities</h3>
                <ul>
                    <li>Luxurious leather seating</li>
                    <li>Panoramic windows for breathtaking views</li>
                    <li>In-flight entertainment system</li>
                    <li>Climate control</li>
                    <li>Personalized service from a dedicated flight attendant</li>
                    <li>Complimentary champagne and refreshments</li>
                    <li>Smooth and comfortable flight experience</li>
                </ul>
                </div><br></br>
                <button className="fancy-button" onClick={showAlert}>BOOK NOW FOR $200 PER HOUR</button>
            </div>
            <div className="column">
                <h2>AeroLux Alliance Combo</h2>
                <p>
                Embark on a journey of unparalleled luxury and convenience with our Helicopter and Car Combo package. Experience the thrill of a private helicopter flight, soaring above breathtaking landscapes, and arrive in style at our secluded island oasis. But the journey doesn't end there. With the addition of our chauffeur-driven car service, you'll enjoy a seamless transition from the skies to the roads, ensuring a truly VIP experience from start to finish. Book now to elevate your destination wedding experience to new heights, only at Whispers of Love Peninsula.
                </p><br></br>
                <div className="widget">
                <h3>Helicopter & Car Amenities</h3>
                <ul>
                    <li>All the amenities offered by our luxury helicopter</li>
                    <li>Luxury car with plush interiors</li>
                    <li>Professional chauffeur service</li>
                    <li>Complimentary bottled water and refreshments</li>
                    <li>Smooth and comfortable transportation experience</li>
                </ul>
                </div><br></br>
                <button className="fancy-button" onClick={showAlert}>BOOK NOW FOR $350 PER HOUR</button>
            </div>
            </div>
            <div className="extra-amenities-button">
                <p className="rainbow-text">Click Below &#8595;</p>
                <button className="fancy-button" onClick={openPopup}>EXTRA AMENITIES</button>
                <p>To book extra amenities with us, please feel free to reach out to us via phone at 111-222-333 or email us at nikunjsharma@thegreatest.com. We'll be delighted to assist you with your booking.</p>
            </div>
            {showPopup && <AmenitiesPopup onClose={closePopup} />}
            <div className="banner-container">
            <div class="banner">
                <h1>WONDERING ABOUT YOUR GUESTS?</h1>
                <h2>DON'T WORRY, WE HAVE YOU COVERED</h2>
            </div>
            </div>
            <div className="main-section">
          <div className="text-container">
            <h2>Seafair</h2>
            <p>Treat your wedding guests to an extraordinary experience aboard Seafair, the epitome of luxury on the water. With its elegant design, top-notch amenities, and impeccable service, Seafair offers a remarkable setting for your guests to enjoy as they cruise to our private island. Create cherished memories and celebrate your special day in unparalleled style and opulence. Contact us today to reserve Seafair and make your wedding guests feel truly pampered.</p>
          </div>
          <div className="image-container">
            <img
              src={image7}
              alt={'Image 7'}
              className="image"
            />
          </div>
        </div>
        <div className="main-section boat">    
            <div className="column">
                <div className="widget">
                <h3>Seafair Amenities</h3>
                <ul>
                    <li>Opulent staterooms and suites with lavish interiors</li>
                    <li>Breathtaking ocean views from expansive windows and balconies</li>
                    <li>State-of-the-art entertainment system for onboard enjoyment</li>
                    <li>Individually controlled climate settings for ultimate comfort</li>
                    <li>Attentive and personalized service from a dedicated crew</li>
                    <li>Exquisite dining options featuring gourmet cuisine</li>
                    <li>Relaxing spa and wellness facilities for indulgent pampering</li>
                    </ul>
                </div><br></br>
                <button className="fancy-button" onClick={showAlert}>BOOK NOW FOR $500 PER GUEST</button>
            </div>
            </div>
      </main>
      <Footer />
    </div>
  );
};

export default Location;
