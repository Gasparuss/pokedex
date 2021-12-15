import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, CardMedia, Card, CardContent } from '@mui/material';
import { usePokemons } from '../../../hooks/usePokemons';
import {
  extractEvolutionChain,
  getImageSourcefromID,
  getTypeIcon,
  toFirstCharUppercase,
  findColor
} from '../../../utils/GlobalFunctions';
import { StyledWrapper } from './Pokemon.styles';
import { StyledTypography } from '../../atoms/Typography/Typography';
import FullPageSpinner from '../../atoms/FullPageSpinner/FullPageSpinner';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const { getPokemonEvolutionChain, getPokemonSpecies, getPokemonById } =
    usePokemons();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const pokemonData = await getPokemonById(id);
      const pokemonSpeciesData = await getPokemonSpecies(id);
      const pokemonEvolutionChain = await getPokemonEvolutionChain(
        pokemonSpeciesData.evolution_chain.url
      );
      const evolutionData = extractEvolutionChain(pokemonEvolutionChain);
      setEvolutionChain(evolutionData);
      setPokemonSpecies(pokemonSpeciesData);
      setPokemon(pokemonData);
      setIsLoading(false);
    })();
  }, [getPokemonById, getPokemonEvolutionChain, getPokemonSpecies, id]);

  if (isLoading) return <FullPageSpinner />;

  console.log(evolutionChain);

  return (
    <StyledWrapper>
      {pokemon ? (
        <Grid
          container
          sx={{
            maxWidth: '1300px',
            padding: '30px',
            flexWrap: 'wrap',
            marginTop: '15px',
            justifyContent: 'space-around',
            marginBottom: '15px'
          }}
        >
          <Grid
            item
            sx={{
              // minWidth: '400px',
              height: '100%'
            }}
          >
            <Card
              sx={{
                maxWidth: '500px',
                height: '100%',
                boxShadow: '0 3px 15px rgba(0, 0, 0, 0.089)',
                background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${
                  findColor(pokemon.types[0].type.name)[1]
                } 100%)`
              }}
            >
              <StyledTypography
                variant="h4"
                sx={{
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
                  width: '300px',
                  margin: 'auto'
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  image={getTypeIcon(pokemon.types[0].type.name)[1]}
                  sx={{ width: 35, height: 35, margin: 'auto' }}
                />
                <StyledTypography variant="h5">{`${toFirstCharUppercase(
                  pokemon.name
                )}`}</StyledTypography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            sx={{
              flexDirection: 'column'
            }}
          >
            <Card
              sx={{
                border: '1px solid red',
                boxShadow: '0 3px 15px rgba(0, 0, 0, 0.089)'
              }}
            >
              <CardContent>
                <StyledTypography variant="h5">Biography</StyledTypography>
                <span>
                  {pokemonSpecies.flavor_text_entries[10].flavor_text}
                </span>
                <StyledTypography
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <b>Genus</b>
                  <span>{pokemonSpecies.genera[7].genus}</span>
                </StyledTypography>
                <StyledTypography
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <b>Height</b>
                  <span>{Math.round(pokemon.height) / 10}m</span>
                </StyledTypography>
                <StyledTypography
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <b>Weight</b>
                  <span>{Math.round(pokemon.weight) / 10}kg</span>
                </StyledTypography>
                <b>Abilities</b>
                <StyledTypography
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    position: 'relative',
                    bottom: '30px'
                  }}
                >
                  {pokemon.abilities.map((a) => (
                    <li key={a.ability.name} style={{ listStyle: 'none' }}>
                      {a.ability.name}
                    </li>
                  ))}
                </StyledTypography>
              </CardContent>
              <CardContent>
                <StyledTypography variant="h5">Training</StyledTypography>
                <StyledTypography
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <b>Base Exp</b>
                  <span>{pokemon.base_experience}</span>
                </StyledTypography>
                <StyledTypography
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <b>Base Happiness</b>
                  <span>{pokemonSpecies.base_happiness}</span>
                </StyledTypography>
                <StyledTypography
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <b>Catch Rate</b>
                  <span>{pokemonSpecies.capture_rate}</span>
                </StyledTypography>
                <StyledTypography
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <b>Growth Rate</b>
                  <span>{pokemonSpecies.growth_rate.name}</span>
                </StyledTypography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <div>PRZEPRASZAMY NEI MOZNA WCZYTAC DANYCH</div>
      )}
    </StyledWrapper>
  );
};

export default Pokemon;
