import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';
import Pokemon from './Pokemon';
import Pokedex from './Pokedex';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:id" element={<Pokemon />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Root;
