
import React, { useState } from 'react';
// import './NavBar.css';

export default function SearchAppBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar-root">
      <div className="navbar-app-bar">
        <div className="navbar-toolbar">
        <img 
            src="https://t3.ftcdn.net/jpg/06/09/74/46/360_F_609744698_mUHlLPZibYCknuBdx2h8Bw0Nupzb2sM4.jpg" 
            alt="Logo" 
            className="navbar-logo" 
          />
          
          <div className="navbar-links">
            <span className="navbar-link" onClick={() => handleScroll('home')}>Home</span>
            <span className="navbar-link" onClick={() => handleScroll('about')}>About Us</span>
            <span className="navbar-link" onClick={() => handleScroll('contact')}>Contact Us</span>
            <span className="navbar-link" onClick={() => handleScroll('blog')}>Blog</span>
          </div>
          {/* <div className="navbar-title">
            <span className="navbar-title-text">WAY TO MARS</span>
          </div> */}
          {/* <div className="navbar-search">
            <input
              className="navbar-search-input"
              type="text"
              placeholder="Search..."
              aria-label="search"
            />
          </div> */}
          <div className="navbar-dropdown" onClick={toggleDropdown}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEu4e86qm2mlUj2LZUmDBNgE9hbTLrNcxuk7-3LQcy6B_ZHsUdjdvqkGd11xTFTYvo3iw&usqp=CAU" 
              alt="dropdown" 
              className="navbar-dropdown-icon" 
            />
            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="/profile" className="dropdown-item">Profile</a>
                <a href="/login" className="dropdown-item">Logout</a>
                <a href="/settings" className="dropdown-item">Settings</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
