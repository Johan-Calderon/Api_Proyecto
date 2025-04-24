import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-image-container">
        <img 
          src="https://bracketfights.com/images/hero/2019/dragon-ball-saga-48139/1657378806.jpg" 
          alt="Logo Dragon Ball" 
        />
      </div>
      <h1>The Dragon Ball API</h1>
    </header>
  )
}

export default Header;