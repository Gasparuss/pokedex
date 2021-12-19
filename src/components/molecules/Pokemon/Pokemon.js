import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, CardMedia, Card, CardContent } from '@mui/material';
import { usePokemons } from '../../../hooks/usePokemons';

import {
  extractEvolutionChain,
  getImageSourcefromID,
  getTypeIcon,
  toFirstCharUppercase,
  findColor,
  getIDStringfromURLEvolution,
  getImageSourceFromURL
} from '../../../utils/GlobalFunctions';
import { StyledWrapper, StyledCardMedia } from './Pokemon.styles';
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

  return (
    <StyledWrapper>
      {pokemon ? (
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: 'center',
            margin: '15px 0',
            maxWidth: '1500px',
            boxShadow: '0 3px 15px rgba(0, 0, 0, 0.089)'
          }}
        >
          <Grid
            container
            sx={{
              padding: '15px',
              justifyContent: 'space-around'
            }}
          >
            <Grid
              item
              sx={{
                maxWidth: '400px',
                width: '450px',
                maxHeight: '500px'
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
                display: 'flex',
                flexDirection: 'column',
                width: '425px',
                maxWidth: '425px'
              }}
            >
              <CardContent sx={{}}>
                <StyledTypography variant="h5">Biography</StyledTypography>
                <pre style={{ fontSize: ' 15px' }}>
                  {pokemonSpecies.flavor_text_entries[10].flavor_text}
                </pre>

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
            </Grid>

            <Grid
              container
              sx={{
                maxWidth: '500px',
                padding: '15px'
              }}
            >
              <StyledTypography variant="h5">Evolutions</StyledTypography>
              <Grid
                container
                sx={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: '15px'
                }}
              >
                {evolutionChain ? (
                  evolutionChain.map(({ name, url }) => (
                    <Grid
                      item
                      key={name}
                      sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <StyledTypography
                        sx={{
                          textAlign: 'center'
                        }}
                      >
                        #{getIDStringfromURLEvolution(url)}
                      </StyledTypography>
                      <Link to={`/pokedex/${getIDStringfromURLEvolution(url)}`}>
                        <StyledCardMedia
                          component="img"
                          image={getImageSourceFromURL(url)}
                          sx={{
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            padding: '15px',
                            background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${
                              findColor(pokemon.types[0].type.name)[1]
                            } 100%)`
                          }}
                        />
                      </Link>
                      <StyledTypography sx={{ textAlign: 'center' }}>
                        {toFirstCharUppercase(name)}
                      </StyledTypography>
                    </Grid>
                  ))
                ) : (
                  <div>Sorry, can/t load pokemon evolution chain</div>
                )}
              </Grid>
              <Grid
                container
                sx={{
                  marginTop: '45px',

                  justifyContent: 'center'
                }}
              >
                <Grid
                  container
                  sx={{
                    paddingLeft: '5px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <StyledTypography
                    variant="h5"
                    sx={{
                      textAlign: 'start',
                      width: '100%'
                    }}
                  >
                    Stats
                  </StyledTypography>

                  <Grid
                    item
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      maxWidth: '250px',
                      flexWrap: 'wrap',
                      gap: '10px'
                    }}
                  >
                    <StyledTypography
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '60px'
                      }}
                    >
                      <b>HP</b>
                      <span> {pokemon.stats[0].base_stat}</span>
                    </StyledTypography>
                    <StyledTypography
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '60px'
                      }}
                    >
                      <b>Atk</b>
                      <span> {pokemon.stats[0].base_stat}</span>
                    </StyledTypography>
                    <StyledTypography
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '60px'
                      }}
                    >
                      <b>Def</b>
                      <span> {pokemon.stats[0].base_stat}</span>
                    </StyledTypography>
                    <StyledTypography
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '60px'
                      }}
                    >
                      <b>Sp. Atk</b>
                      <span> {pokemon.stats[0].base_stat}</span>
                    </StyledTypography>
                    <StyledTypography
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60px'
                      }}
                    >
                      <b>Sp. Def</b>
                      <span> {pokemon.stats[0].base_stat}</span>
                    </StyledTypography>
                    <StyledTypography
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '60px'
                      }}
                    >
                      <b>Speed</b>
                      <span> {pokemon.stats[0].base_stat}</span>
                    </StyledTypography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div style={{ color: 'red' }}>Sorry, can/t load pokemon details</div>
      )}
    </StyledWrapper>
  );
};

export default Pokemon;
