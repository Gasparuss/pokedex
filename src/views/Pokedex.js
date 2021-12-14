import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  Toolbar,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  AppBar
} from '@mui/material';

import FullPageSpinner from '../components/FullPageSpinner/FullPageSpinner';
import { PokeCard } from '../components/PokeCard/PokeCard';
import {
  getImageSourcefromID,
  toFirstCharUppercase,
  getTypeIcon,
  findColor
} from '../utils/GlobalFunctions';
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
      <h1>SearchBar</h1>
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
          {pokemonData.map(({ data: { name, id, types } }) => (
            <Grid item key={id}>
              <PokeCard
                sx={{
                  cursor: 'pointer',
                  width: '300px',
                  boxShadow: '0 3px 15px rgba(0, 0, 0, 0.089)',
                  background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${
                    findColor(types[0].type.name)[1]
                  } 100%)`
                }}
                onClick={() => navigate(`${id}`)}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Montserrat',
                    marginTop: '10px',
                    textAlign: 'center',
                    opacity: '0.4'
                  }}
                >
                  #{id}
                </Typography>
                <CardMedia
                  component="img"
                  image={getImageSourcefromID(id)}
                  sx={{
                    width: '125px',
                    height: '125px',
                    margin: 'auto'
                  }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  {[types[0]].map((type) => (
                    <CardMedia
                      component="img"
                      key={type.type.name}
                      image={getTypeIcon(type.type.name)[1]}
                      sx={{ width: 35, height: 35, margin: 'auto' }}
                    />
                  ))}
                  <Typography
                    sx={{ fontFamily: 'Montserrat' }}
                  >{`${toFirstCharUppercase(name)}`}</Typography>
                </CardContent>
              </PokeCard>
            </Grid>
          ))}
        </Grid>
      ) : (
        <FullPageSpinner />
      )}
    </>
  );
};

export default Pokedex;
