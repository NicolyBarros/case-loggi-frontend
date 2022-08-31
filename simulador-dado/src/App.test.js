import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('render project title', () => {
  render(<App />);
  const titleElement = screen.getByText("Simulador de dado");
  expect(titleElement).toBeInTheDocument();
});

test('clicking button', () => {
  render(<App />);
  const checkButton = screen.getByRole('button', { name: /Jogar/i });
  expect(checkButton).toBeInTheDocument();
});

test('test button click', () => {
  render(<App />);
  const buttonElement = screen.getByText("Jogar");
  fireEvent(buttonElement, new MouseEvent('click', {}));
  const modal = screen.queryByText("clicked");
  expect(modal).not.toBeInTheDocument();
});

test('render dice image', () => {
  render(<App />);
  const diceElement = screen.getByAltText("Imagem da face do dado com 1 ponto");
  expect(diceElement).toBeInTheDocument();
});



