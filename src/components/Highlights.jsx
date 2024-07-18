import React from 'react';
import '../assets/styles/Highlights.scss';

const Highlights = () => {
  return (
    <section className="highlights">
      <h2>Specials</h2>
      <div className="specials">
        <article className="card">
          <figure>
            <img src="greek-salad.jpg" alt="Greek Salad" />
            <figcaption>Greek Salad</figcaption>
          </figure>
          <div className="card-text">
            <h3>Greek Salad</h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </article>
        <article className="card">
          <figure>
            <img src="bruschetta.jpg" alt="Bruschetta" />
            <figcaption>Bruschetta</figcaption>
          </figure>
          <div className="card-text">
            <h3>Bruschetta</h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </article>
        <article className="card">
          <figure>
            <img src="lemon-dessert.jpg" alt="Lemon Dessert" />
            <figcaption>Lemon Dessert</figcaption>
          </figure>
          <div className="card-text">
            <h3>Lemon Dessert</h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Highlights;