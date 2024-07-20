import React from 'react';
import '../assets/styles/Testimonials.scss';

const getRandomRating = () => Math.floor(3 + Math.random() * 3);

const reviews = [
  {
    name: "John Doe",
    rating: getRandomRating(),
    text: "Amazing food and great service! Highly recommend the Greek Salad.",
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Jane Smith",
    rating: getRandomRating(),
    text: "The Lemon Dessert is out of this world. A must-try for everyone!",
    photo: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Alice Johnson",
    rating: getRandomRating(),
    text: "Fantastic atmosphere and delicious Bruschetta. Will come again.",
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Michael Brown",
    rating: getRandomRating(),
    text: "Great experience overall. The staff were friendly and the food was excellent.",
    photo: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Emily Davis",
    rating: getRandomRating(),
    text: "The Greek Salad is my favorite! Fresh ingredients and perfect seasoning.",
    photo: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Robert Wilson",
    rating: getRandomRating(),
    text: "Loved the service and the food was absolutely delicious. Highly recommended!",
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <article className="testimonial-card" key={index}>
            <div className="rating">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="star empty">☆</span>
              ))}
            </div>
            <div className="user-info">
              <img src={review.photo} alt={review.name} className="user-photo" />
              <h3>{review.name}</h3>
            </div>
            <p>{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
