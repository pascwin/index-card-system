import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gebe eine/i);
  expect(linkElement).toBeInTheDocument();
});

test("check if AlertInfo shows success", () => {
  render(<App />)
  setAlert("richtig")
  const alertText = screen.getByText(/Eingabe war richtig/i);
  expect(alertText).toBeInTheDocument();
})
