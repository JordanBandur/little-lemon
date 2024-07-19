import React from 'react';
import '../assets/styles/Highlights.scss';
import deliveryIcon from '../assets/delivery-logo.svg';

const Highlights = () => {
  return (
    <section className="highlights">
      <div className='highlights-title'>
        <h2>Specials</h2>
        <button className="button secondary">Reserve a Table</button>
      </div>
      <div className="specials">
        <article className="card">
          <figure>
            <img src="images/greek-salad.jpg" alt="Greek Salad" />
          </figure>
          <div className="card-text">
            <div className="card-title">
              <h3>Greek Salad</h3>
              <p>$12.99</p>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chiago style feta cheese, garnished with crunchy garlic and rosemary crutons.</p>
            <button className="order-button">
              <img src={deliveryIcon} alt="Delivery Truck" className="button-icon" />
              Order a delivery
            </button>
          </div>
        </article>
        <article className="card">
          <figure>
            <img src="images/bruchetta.jpg" alt="Bruschetta" />
          </figure>
          <div className="card-text">
            <div className="card-title">
              <h3>Bruschetta</h3>
              <p>$5.99</p>
            </div>
            <p>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <button className="order-button">
              <img src={deliveryIcon} alt="Delivery Truck" className="button-icon" />
              Order a delivery
            </button>
          </div>
        </article>
        <article className="card">
          <figure>
            <img src="images/lemon-dessert.jpg" alt="Lemon Dessert" />
          </figure>
          <div className="card-text">
            <div className="card-title">
              <h3>Lemon Dessert</h3>
              <p>$5.00</p>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be.</p>
            <button className="order-button">
              Online Menu
              <img src={deliveryIcon} alt="Delivery Truck" className="button-icon" />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Highlights;