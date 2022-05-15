import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const scheduler = screen.getByText(/Rotation/i);
  expect(scheduler).toBeInTheDocument();
});
