import React from 'react';
import '../assets/styles/Testimonials.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
    <section className="testimonials" aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading">Testimonials</h2>
      <div className="testimonial-cards">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
          {reviews.map((review, index) => (
            <article className="testimonial-card" key={index} aria-label={`Testimonial from ${review.name}`}>
              <div className="rating" aria-label={`Rating: ${review.rating} out of 5`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="star" aria-hidden="true">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <span key={i} className="star empty" aria-hidden="true">☆</span>
                ))}
              </div>
              <div className="user-info">
                <img src={review.photo} alt={`Photo of ${review.name}`} className="user-photo" />
                <h3>{review.name}</h3>
              </div>
              <p>{review.text}</p>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
