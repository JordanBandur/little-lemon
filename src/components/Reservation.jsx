import React, { useState } from 'react';
import '../assets/styles/Reservation.scss';

const ReservationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Reservation submitted successfully!');
    }, 2000); // 2 seconds delay to mimic network request
  };

  const times = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
  ];

  return (
    <div className="reservation-page">
      <h2>Reserve a Table</h2>
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
        <label>
          Occasion:
          <select name="occasion" required>
            <option value="">Select a occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>No Ocassion</option>
          </select>
        </label>
        <button type="submit" className="button primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;
