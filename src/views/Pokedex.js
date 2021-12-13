import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Grid,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  SvgIcon
} from '@mui/material';
import { PokeCard } from '../components/Card/index';
import { getImageSourcefromID, toFirstCharUppercase } from '../utils/functions';
import { usePokemons } from '../hooks/usePokemons';

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState();
  const { getPokemons, getPokemon } = usePokemons();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const pokemon = await getPokemons();
      const pokemonDetails = await Promise.all(
        pokemon.map(async (p) => getPokemon(p.url))
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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            paddingTop: '20px',
            paddingLeft: '50px',
            paddingRight: '50px'
          }}
        >
          {pokemonData.map(({ data: { name, id, types } }) => (
            <Grid item xs={2} sm={4} md={4} key={id}>
              <PokeCard onClick={() => navigate(`/${id}`)}>
                <CardMedia
                  component="img"
                  image={getImageSourcefromID(id)}
                  sx={{ width: '100px', height: '100px', margin: 'auto' }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography>{`${id}. ${toFirstCharUppercase(
                    name
                  )}`}</Typography>
                </CardContent>
              </PokeCard>
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
