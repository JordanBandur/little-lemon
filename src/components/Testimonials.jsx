import React from 'react';
import '../assets/styles/Testimonials.scss';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <article className="testimonial">
        <div className="star-rating" aria-label="5 stars">⭐⭐⭐⭐⭐</div>
        <figure className="user-profile">
          <img src="user1.jpg" alt="User 1" />
          <figcaption>User 1</figcaption>
        </figure>
        <blockquote>Review from user 1...</blockquote>
      </article>
      <article className="testimonial">
        <div className="star-rating" aria-label="4 stars">⭐⭐⭐⭐</div>
        <figure className="user-profile">
          <img src="user2.jpg" alt="User 2" />
          <figcaption>User 2</figcaption>
        </figure>
        <blockquote>Review from user 2...</blockquote>
      </article>
      <article className="testimonial">
        <div className="star-rating" aria-label="5 stars">⭐⭐⭐⭐⭐</div>
        <figure className="user-profile">
          <img src="user3.jpg" alt="User 3" />
          <figcaption>User 3</figcaption>
        </figure>
        <blockquote>Review from user 3...</blockquote>
      </article>
    </section>
  );
};

export default Testimonials;