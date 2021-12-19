import { useCallback } from 'react';
import axios from 'axios';

export const usePokemons = () => {
  const getPokemonById = useCallback(async (id) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/pokemon/${id}`
      );
      return data;
    } catch (e) {
      throw new Error('Sorry, try again later', e);
    }
  }, []);

  const getPokemon = useCallback(async (url) => {
    try {
      const result = axios.get(url);
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  const getPokemonSpecies = useCallback(async (id) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/pokemon-species/${id}`
      );
      return data;
    } catch (e) {
      throw new Error('Sorry, try again later', e);
    }
  }, []);

  const getPokemonEvolutionChain = useCallback(async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      throw new Error('Sorry, try again later', e);
    }
  }, []);

  return {
    getPokemon,
    getPokemonById,
    getPokemonSpecies,
    getPokemonEvolutionChain
  };
};
