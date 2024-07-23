import React, { useState } from 'react';
import '../assets/styles/Booking.scss';

const Booking = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Reservation submitted successfully!');
      onClose();
    }, 2000); // 2 seconds delay to mimic network request
  };

  const times = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', 
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
  ];

  return (
    <div className="booking-modal">
      <div className="booking-content">
        <button className="close-button" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2>Book a Table</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Date:
            <input type="date" name="date" min={today} required />
          </label>
          <label>
            Time:
            <select name="time" required>
              <option value="">Select a time</option>
              {times.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </label>
          <label>
            Number of Guests:
            <input type="number" name="guests" min="1" max="10" required />
          </label>
          <button type="submit" className="button primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
