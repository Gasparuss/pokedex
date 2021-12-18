import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Grid, Toolbar, TextField } from '@mui/material';
import { usePokemons } from '../../../hooks/usePokemons';
import FullPageSpinner from '../../atoms/FullPageSpinner/FullPageSpinner';
import PokemonsListItem from '../../molecules/PokemonsListItem/PokemonsListItem';

const Pokedex = () => {
  const [isLoading, setIsLoading] = useState(null);
  const { getPokemons, getPokemon, getPokemonsList } = usePokemons();
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const pokemons = await getPokemons();
      const pokemonDetails = await Promise.all(
        pokemons.results.map(async (p) => await getPokemon(p.url))
      );
      setPokemonData(pokemonDetails);
      setIsLoading(false);
    })();
  }, [getPokemon, getPokemons]);

  if (isLoading) return <FullPageSpinner />;

  return (
    <>
      <Toolbar>
        <div>
          <TextField
            onChange={handleSearchChange}
            label="Pokemon"
            variant="standard"
          />
        </div>
      </Toolbar>
      {pokemonData ? (
        <Grid
          container
          columnSpacing={3}
          rowSpacing={2}
          sx={{
            justifyContent: 'center',
            marginBottom: '15px'
          }}
        >
          {pokemonData.map(
            ({ data }) =>
              data.name.includes(filter) && (
                <PokemonsListItem key={data.id} pokemonData={data} />
              )
          )}
        </Grid>
      ) : (
        <div>enougn</div>
      )}
    </>
  );
};

export default Pokedex;
