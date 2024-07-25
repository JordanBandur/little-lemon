import React, { useState, useRef } from 'react';
import '../assets/styles/Reservation.scss';
import { submitAPI } from '../api';
import { handleFormValidation } from '../hooks/validation';

const ReservationPage = ({ availableTimes, onDateChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newErrors = handleFormValidation(form);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form);
    const isSuccess = await submitAPI(Object.fromEntries(formData.entries()));

    if (isSuccess) {
      setIsSubmitting(false);
      alert('Reservation submitted successfully!');
      form.reset();
      setErrors({});
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
      {Object.keys(errors).length > 0 && (
        <div className="error-section">
          <ul>
            {Object.entries(errors).map(([field, error], index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate ref={formRef}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            className={errors.name ? 'invalid' : ''}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            className={errors.email ? 'invalid' : ''}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            required
            className={errors.phone ? 'invalid' : ''}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            min={today}
            required
            onChange={handleDateChange}
            className={errors.date ? 'invalid' : ''}
          />
        </label>
        <label>
          Time:
          <select
            name="time"
            required
            className={errors.time ? 'invalid' : ''}
          >
            <option value="">Select a time</option>
            {Array.isArray(availableTimes) && availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </label>
        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            min="1"
            required
            className={errors.guests ? 'invalid' : ''}
          />
        </label>
        <label>
          Occasion:
          <select
            name="occasion"
            required
            className={errors.occasion ? 'invalid' : ''}
          >
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
