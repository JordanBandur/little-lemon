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
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
        >
          &#9776;
        </button>
        <Nav className={isOpen ? 'open' : ''} id="navigation-menu" />
      </div>
    </header>
  );
}

export default Header;
