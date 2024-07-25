import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationPage from '../Reservation';

const availableTimes = ['12:00 PM', '1:00 PM'];

test('renders ReservationPage with HTML5 validation attributes', () => {
  render(<ReservationPage availableTimes={availableTimes} onDateChange={() => { }} />);

  // Validate name input attributes
  const nameInput = screen.getByLabelText(/Name:/i);
  expect(nameInput).toHaveAttribute('type', 'text');
  expect(nameInput).toBeRequired();

  // Validate email input attributes
  const emailInput = screen.getByLabelText(/Email:/i);
  expect(emailInput).toHaveAttribute('type', 'email');
  expect(emailInput).toBeRequired();

  // Validate phone input attributes
  const phoneInput = screen.getByLabelText(/Phone Number:/i);
  expect(phoneInput).toHaveAttribute('type', 'tel');
  expect(phoneInput).toBeRequired();

  // Validate date input attributes
  const dateInput = screen.getByLabelText(/Date:/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute('min', new Date().toISOString().split('T')[0]);

  // Validate time select attributes
  const timeSelect = screen.getByLabelText(/Time:/i);
  expect(timeSelect).toBeRequired();

  // Validate guests input attributes
  const guestsInput = screen.getByLabelText(/Number of Guests:/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute('min', '1');

  // Validate occasion select attributes
  const occasionSelect = screen.getByLabelText(/Occasion:/i);
  expect(occasionSelect).toBeRequired();
});
