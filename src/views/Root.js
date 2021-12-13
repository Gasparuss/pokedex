import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import Pokemon from './Pokemon';
import Pokedex from './Pokedex';
import News from './News';
import Favourites from './Favourites';
import '../assets/styles/fonts.css';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to="/pokedex" />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/news" element={<News />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<Pokemon />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Root;
