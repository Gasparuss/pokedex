import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import { GlobalStyle } from '../styles/GlobalStyles';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
};

export default Root;
