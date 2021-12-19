import { useCallback } from 'react';
import axios from 'axios';

export const usePokemons = () => {
  const getPokemonById = useCallback(async (id) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      return data;
    } catch (e) {
      throw new Error('Sorry, can"t find pokemon by id', e);
    }
  }, []);

  const getPokemon = useCallback(async (url) => {
    try {
      const result = axios.get(url);
      return result;
    } catch (e) {
      throw new Error('Sorry, can"t find pokemon by url', e);
    }
  }, []);

  const getPokemonSpecies = useCallback(async (id) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      return data;
    } catch (e) {
      throw new Error('Sorry, can"t find pokemon species by id', e);
    }
  }, []);

  const getPokemonEvolutionChain = useCallback(async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      throw new Error('Sorry, can"t find evolution chain by url', e);
    }
  }, []);

  return {
    getPokemon,
    getPokemonById,
    getPokemonSpecies,
    getPokemonEvolutionChain
  };
};
