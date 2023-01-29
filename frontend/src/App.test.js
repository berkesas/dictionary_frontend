import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

test('fetchAPI returns array', async () => {
  const dom = render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getAllByText(/About/i);
  expect(linkElement[0]).toBeInTheDocument();
});