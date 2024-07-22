import React, { useState } from 'react';
import Nav from './Nav';
import '../assets/styles/Header.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header-nav">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          &#9776;
        </button>
        <Nav className={isOpen ? 'open' : ''} />
      </div>
    </header>
  );
}

export default Header;
