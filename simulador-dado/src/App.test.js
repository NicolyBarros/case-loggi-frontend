import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios'; 
import { play } from './App';

//jest.mock(...) é usado para simular automaticamente o axios
/* module.jest.mock('axios')
const mockedAxios = axios 

const mockedResponse = { 
  data: 2, 
  status: 200, 
  statusText: 'OK', 
  headers: {}, 
  config: {}, 
}; */

test('render project title', () => {
  render(<App />);
  const titleElement = screen.getByText("Simulador de dado");
  expect(titleElement).toBeInTheDocument();
});

test('render roll button', () => {
  render(<App />);
  const checkButton = screen.getByRole('button', { name: /Jogar/i });
  expect(checkButton).toBeInTheDocument();
});

/* test('test button click', () => {
  render(<App />);
    mockedAxios.get();
    expect(axios.get).not.toHaveBeenCalled(); 
    expect(axios.get).toHaveBeenCalled(); 
    expect(dados).toEqual(todos);
    
  const buttonElement = screen.getByText("Jogar");
  fireEvent(buttonElement, new MouseEvent('click', {}));
}); */

test('render dice image', () => {
  render(<App />);
  const diceElement = screen.getByAltText("Imagem da face do dado com 1 ponto");
  expect(diceElement).toBeInTheDocument();
});




