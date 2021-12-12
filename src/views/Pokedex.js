import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress
} from '@mui/material';
import { getImageSourcefromID } from '../utils/functions';
import { usePokemons } from '../hooks/usePokemons';

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState(undefined);

  const { getPokemons, getPokemon } = usePokemons();

  useEffect(() => {
    (async () => {
      const pokemon = await getPokemons();
      const pokemonDetails = await Promise.all(
        pokemon.map(async (p) => await getPokemon(p.url))
      );
      setPokemonData(pokemonDetails);
    })();
  }, [getPokemon, getPokemons]);

  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={6}>
          {pokemonData.map(({ data: { name, id, types } }) => (
            <Grid item xs={12} sm={2} key={id}>
              <Card>
                <CardMedia
                  component="img"
                  image={getImageSourcefromID(id)}
                  sx={{ width: '120px', height: '120px' }}
                />
                <CardContent>Hello</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
