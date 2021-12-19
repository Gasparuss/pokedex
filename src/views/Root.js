import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import { Pokemon } from '../components/molecules/Pokemon/Pokemon';
import { PokemonsList } from '../components/organisms/PokemonsList/PokemonsList';
import '../assets/styles/fonts.css';
import { MainTemplate } from '../templates/MainTemplate/MainTemplate';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Navigate to="/pokedex" />} />
          <Route path="/pokedex" element={<PokemonsList />} />
          <Route path="/pokedex/:id" element={<Pokemon />} />
        </Routes>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
