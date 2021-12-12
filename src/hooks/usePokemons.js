import { useCallback } from 'react';
import axios from 'axios';

export const usePokemons = () => {
  const getPokemons = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/pokemon?limit=20`
      );
      return data.results;
    } catch (e) {
      throw new Error(e);
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

  const getPokemonById = useCallback(async (id) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/pokemon/${id}`
      );
      return data;
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
      throw new Error(e);
    }
  }, []);

  const getPokemonEvolutionChain = useCallback(async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  // const findPokemons = async (searchPhrase) => {
  //   try {
  //     const { data } = await axios.post(`/pokemons/search`, {
  //       searchPhrase,
  //     });
  //     console.log(data);
  //     return data;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return {
    getPokemons,
    getPokemon,
    // findPokemons,
    getPokemonById,
    getPokemonSpecies,
    getPokemonEvolutionChain
  };
};
