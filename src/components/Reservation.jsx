import React, { useState, useRef } from 'react';
import '../assets/styles/Reservation.scss';
import { submitAPI } from '../api';

const ReservationPage = ({ availableTimes, onDateChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?\d{10,13}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity() || !customValidation(form)) {
      handleFormValidation(form);
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

  const customValidation = (form) => {
    const newErrors = {};

    if (!emailPattern.test(form.email.value)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!phonePattern.test(form.phone.value)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (form.guests.value <= 0) {
      newErrors.guests = 'Number of guests should be greater than 0.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormValidation = (form) => {
    const newErrors = {};

    if (!form.name.validity.valid) {
      newErrors.name = 'Please enter your name.';
    }
    if (!form.email.validity.valid) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.phone.validity.valid) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!form.date.validity.valid) {
      newErrors.date = 'Please select a valid date.';
    }
    if (!form.time.validity.valid) {
      newErrors.time = 'Please select a valid time.';
    }
    if (!form.guests.validity.valid) {
      newErrors.guests = 'Please enter a valid number of guests.';
    }
    if (!form.occasion.validity.valid) {
      newErrors.occasion = 'Please select an occasion.';
    }

    setErrors(newErrors);
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
            pattern={emailPattern.source}
            className={errors.email ? 'invalid' : ''}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            required
            pattern={phonePattern.source}
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
