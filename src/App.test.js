import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import App from './App';

test('renders Reserve a Table link', async () => {
  await act(async () => {
    render(<App />);
  });

  await waitFor(() => {
    const linkElement = screen.getByText(/Reserve a Table/i);
    expect(linkElement).toBeInTheDocument();
  });
});
