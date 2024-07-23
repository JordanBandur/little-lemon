import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Hero.scss';

const Hero = () => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reserve');
  };

  return (
    <section className="hero">
      <section className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="button secondary" onClick={handleReserveClick}>Reserve a Table</button>
      </section>
      <figure className="hero-image">
        <img src="images/restaurant-food.jpg" alt="Mediterranean food" />
      </figure>
    </section>
  );
};

export default Hero;
