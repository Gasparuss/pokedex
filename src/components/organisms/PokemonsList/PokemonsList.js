import React, { useState, useEffect } from 'react';
import { Grid, Toolbar, TextField } from '@mui/material';
import axios from 'axios';
import { Pagination } from '../../atoms/Pagination/Pagination';
import { usePokemons } from '../../../hooks/usePokemons';
import { FullPageSpinner } from '../../atoms/FullPageSpinner/FullPageSpinner';
import { PokemonsListItem } from '../../molecules/PokemonsListItem/PokemonsListItem';

export const PokemonsList = () => {
  const [isLoading, setIsLoading] = useState(null);
  const { getPokemon } = usePokemons();
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const pokemons = await axios.get(currentPageUrl);
        const pokemonDetails = await Promise.all(
          pokemons.data.results.map(async (p) => await getPokemon(p.url))
        );
        setPokemonData(pokemonDetails);
        setNextPageUrl(pokemons.data.next);
        setPrevPageUrl(pokemons.data.previous);
      } catch (e) {
        throw new Error('Sorry, can"t load pokemons', e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [currentPageUrl, getPokemon]);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const handleNextClick = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const handlePrevClick = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (isLoading) return <FullPageSpinner />;

  return (
    <>
      <Toolbar>
        <div>
          <TextField
            onChange={handleSearchChange}
            label="Pokemon"
            variant="standard"
            sx={{ marginBottom: '15px' }}
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
        <div style={{ color: 'red' }}>
          Something went wrong, please try again later
        </div>
      )}
      <Pagination
        handleNextClick={nextPageUrl ? handleNextClick : null}
        handlePrevClick={prevPageUrl ? handlePrevClick : null}
      />
    </>
  );
};
