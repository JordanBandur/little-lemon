import React from 'react';
import '../assets/styles/Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <section className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="button primary">Reserve a Table</button>
      </section>
      <figure className="hero-image">
        <img src="images/restaurant-food.jpg" alt="Mediterranean food" />
      </figure>
    </section>
  );
};

export default Hero;