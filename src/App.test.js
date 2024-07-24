import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Reserve a Table link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reserve a Table/i);
  expect(linkElement).toBeInTheDocument();
});
