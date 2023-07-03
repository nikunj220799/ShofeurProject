// Footer.js
import React from 'react';
import './Footer.css';
import instagramLogo from './insta.png';
import facebookLogo from './fb.png';
import linkedinLogo from './linkedin.png';
import twitterLogo from './twitter.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-media-icons">
          <a href="https://www.instagram.com"><img src={instagramLogo} alt="Instagram" /></a>
          <a href="https://www.facebook.com"><img src={facebookLogo} alt="Facebook" /></a>
          <a href="https://www.linkedin.com"><img src={linkedinLogo} alt="LinkedIn" /></a>
          <a href="https://twitter.com"><img src={twitterLogo} alt="Twitter" /></a>
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <a href="#">Blog</a>
          </div>
          <div className="footer-link">
            <a href="#">About Us</a>
          </div>
          <div className="footer-link">
            <a href="#">Site Map</a>
          </div>
          <div className="footer-link">
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-link">
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
      <p>© Created by Nikunj Sharma for Shofeur Project. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
