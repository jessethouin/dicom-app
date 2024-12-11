import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("Renders upload button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Upload DICOM File/i);
  expect(linkElement).toBeInTheDocument();
});
