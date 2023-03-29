import { render, screen } from '@testing-library/react';
import { App } from './App';

it('renders link', () => {
  render(<App />);

  const linkElement = screen.getByText(/Yaye/i);
  expect(linkElement).toBeInTheDocument();
});


it('is the test area', () => {

});
