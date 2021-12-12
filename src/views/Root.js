import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

const Root = () => {
  const name = 'kacper';

  return (
    <div>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
};

export default Root;
