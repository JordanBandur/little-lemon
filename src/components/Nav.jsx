import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header-nav" aria-label="Main Navigation">
      <img src="images/Logo.svg" alt="Little Lemon logo" className="logo" />
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="navigation-menu"
      >
        &#9776;
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navigation-menu">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="/reserve">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
