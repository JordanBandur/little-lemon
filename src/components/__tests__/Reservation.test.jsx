import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationPage from '../Reservation';

// Mock props
const availableTimes = [
  '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
];
const dispatch = jest.fn();

describe('ReservationPage', () => {
  test('renders static text', () => {
    render(<ReservationPage availableTimes={availableTimes} dispatch={dispatch} />);
    const headingElement = screen.getByText(/Reserve a Table/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders date input', () => {
    render(<ReservationPage availableTimes={availableTimes} dispatch={dispatch} />);
    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput).toBeInTheDocument();
  });
});
