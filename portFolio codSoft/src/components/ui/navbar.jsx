
import React, { useState } from 'react';


export default function SearchAppBar() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

 

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar-root">
      <div className="navbar-app-bar">
        <div className="navbar-toolbar">
        {/* <img 
            src="https://t3.ftcdn.net/jpg/06/09/74/46/360_F_609744698_mUHlLPZibYCknuBdx2h8Bw0Nupzb2sM4.jpg" 
            alt="Logo" 
            className="navbar-logo" 
          /> */}
          
          <div className="navbar-links">
            <span className="navbar-link" onClick={() => handleScroll('home')}>Home</span>
            <span className="navbar-link" onClick={() => handleScroll('about')}>About</span>
            <span className="navbar-link" onClick={() => handleScroll('project')}>Projects</span>
            <span className="navbar-link" onClick={() => handleScroll('skill')}>Skills</span>
            <span className="navbar-link" onClick={() => handleScroll('contact')}>Contact</span>
          </div>
     
         
        </div>
      </div>
    </div>
  );
}

