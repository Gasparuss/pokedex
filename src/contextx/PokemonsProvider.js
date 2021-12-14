import React, { useState, useEffect, useMemo } from 'react';
import { usePokemons } from '../hooks/usePokemons';

export const PokemonsContext = React.createContext({
  pokemons: []
});

const PokemonsProvider = ({ children }) => {
  const { getPokemons, getPokemon } = usePokemons();
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonValue] = useMemo(
    () => [pokemonData, setPokemonData],
    [pokemonData]
  );

  useEffect(() => {
    (async () => {
      const pokemons = await getPokemons();
      const pokemonDetails = await Promise.all(
        pokemons.map(async (p) => await getPokemon(p.url))
      );
      setPokemonData(pokemonDetails);
    })();
    return () => {
      setPokemonData(null);
    };
  }, [getPokemon, getPokemons]);

  return (
    <PokemonsContext.Provider value={pokemonValue}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
