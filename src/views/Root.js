import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import Pokemon from '../components/Pokemon/Pokemon';
import Pokedex from './Pokedex';
import News from './News';
import Favourites from './Favourites';
import '../assets/styles/fonts.css';
import MainTemplate from '../components/MainTemplate/MainTemplate';
import PokemonsProvider from '../contextx/PokemonsProvider';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <PokemonsProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/pokedex" />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<Pokemon />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </PokemonsProvider>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
