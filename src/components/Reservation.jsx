import React, { useState } from 'react';
import '../assets/styles/Reservation.scss';
import { submitAPI } from '../api';

const ReservationPage = ({ availableTimes, onDateChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const isSuccess = await submitAPI(Object.fromEntries(formData.entries()));

    if (isSuccess) {
      setIsSubmitting(false);
      alert('Reservation submitted successfully!');
    } else {
      setIsSubmitting(false);
      alert('Failed to submit reservation.');
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    onDateChange(selectedDate);
  };

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
          <input type="date" name="date" min={today} required onChange={handleDateChange} />
        </label>
        <label>
          Time:
          <select name="time" required>
            <option value="">Select a time</option>
            {Array.isArray(availableTimes) && availableTimes.map((time, index) => (
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
            <option value="">Select an occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>No Occasion</option>
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
