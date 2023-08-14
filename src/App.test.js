import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders all sections', () => {
  const { getByTestId } = render(<App />);

  // Verify that each section/component is rendered
  expect(getByTestId('header')).toBeInTheDocument();
  expect(getByTestId('services')).toBeInTheDocument();
  expect(getByTestId('work')).toBeInTheDocument();
  expect(getByTestId('workProcess')).toBeInTheDocument();
  expect(getByTestId('newsletter')).toBeInTheDocument();
  expect(getByTestId('about')).toBeInTheDocument();
  expect(getByTestId('testimonials')).toBeInTheDocument();
  expect(getByTestId('contact')).toBeInTheDocument();
  expect(getByTestId('footer')).toBeInTheDocument();
});
