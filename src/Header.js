import React from 'react';
import './Header.css';
import logo from './logo.png';
import userIcon from './Nik.jpeg';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li>
            <div className="logo-container">
              <a href="#">
                <img src={logo} alt="Logo" className="logo" />
              </a>
            </div>
          </li>
          <li>
            |
          </li>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            |
          </li>
          <li className="dropdown">
            <a href="#">OPTIONS &#9662;</a>
            <div className="dropdown-content">
              <a href="#">WEDDING ON MARS</a>
              <a href="#">WEDDING UNDERWATER</a>
            </div>
          </li>
          <li>
            |
          </li>
          <li>
            <a href="#">CAREERS</a>
          </li>
          <li>
            |
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            |
          </li>
          <li className="user-icon">
            <img src={userIcon} alt="User Icon" />
            <span>Nikunj</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
