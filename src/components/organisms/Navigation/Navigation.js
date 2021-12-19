import * as React from 'react';
import { AppBar } from '@mui/material';
import { StyledLink, StyledItem } from './Navigation.styles';
import PokeballLogo from '../../../assets/icons/pokeball.svg';

export const Navigation = () => {
  return (
    <AppBar
      sx={{
        maxWidth: '100vw',
        position: 'sticky',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 3px 15px rgba(0, 0, 0, 0.089)'
      }}
    >
      <StyledLink value="pokedex" to="/pokedex">
        <StyledItem value="pokedex">
          <img src={PokeballLogo} alt="pokeball-logo" />
          Pokedex
        </StyledItem>
      </StyledLink>
    </AppBar>
  );
};
