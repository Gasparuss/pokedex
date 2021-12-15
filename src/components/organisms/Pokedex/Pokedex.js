import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, CardContent, CardMedia } from '@mui/material';
import { usePokemons } from '../../../hooks/usePokemons';
import FullPageSpinner from '../../atoms/FullPageSpinner/FullPageSpinner';
import { PokeCard } from '../../molecules/PokeCard/PokeCard';
import { StyledTypography } from '../../atoms/Typography/Typography';
import {
  getImageSourcefromID,
  toFirstCharUppercase,
  getTypeIcon,
  findColor
} from '../../../utils/GlobalFunctions';

const Pokedex = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(null);
  const { getPokemons, getPokemon } = usePokemons();
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const pokemons = await getPokemons();
      const pokemonDetails = await Promise.all(
        pokemons.map(async (p) => await getPokemon(p.url))
      );
      setPokemonData(pokemonDetails);
      setIsLoading(false);
    })();
  }, [getPokemon, getPokemons]);

  if (isLoading) return <FullPageSpinner />;

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
                <StyledTypography
                  variant="h5"
                  sx={{
                    fontFamily: 'Montserrat',
                    marginTop: '10px',
                    textAlign: 'center',
                    opacity: '0.4'
                  }}
                >
                  #{id}
                </StyledTypography>
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
                  <StyledTypography variant="h5">{`${toFirstCharUppercase(
                    name
                  )}`}</StyledTypography>
                </CardContent>
              </PokeCard>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>Sorry</div>
      )}
    </>
  );
};

export default Pokedex;
