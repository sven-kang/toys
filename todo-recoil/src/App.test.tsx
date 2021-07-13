import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main app component', () => {
  render(<App />);
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
