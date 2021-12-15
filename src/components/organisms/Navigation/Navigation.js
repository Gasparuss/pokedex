import * as React from 'react';
import { AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PokeballLogo from '../../../assets/icons/pokeball.svg';
import ClefairyLogo from '../../../assets/icons/clefairy.svg';
import SnorlaxLogo from '../../../assets/icons/snorlax.svg';

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;

  &.active {
    border-bottom: 1px solid
      ${({ theme, value }) => {
        if (value === 'pokedex') return theme.colors.pokedex;
        if (value === 'favourites') return theme.colors.electric;
        if (value === 'clefairy') return theme.colors.fairy;
        if (value === 'logout') return true;
      }};
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  height: 90px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background: ${({ theme, value }) => {
      if (value === 'pokedex') return theme.colors.pokedex;
      if (value === 'favourites') return theme.colors.electric;
      if (value === 'clefairy') return theme.colors.fairy;
      if (value === 'logout') return theme.colors.normal;
      return theme.colors.grey;
    }};
    color: white;
    transition: all 0.4s ease-out;
  }

  img {
    height: 40px;
    width: 40px;
  }
`;

const Navigation = () => {
  return (
    <AppBar
      sx={{
        width: '100vw',
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
      <StyledLink value="clefairy" to="/news">
        <StyledItem value="clefairy">
          <img src={ClefairyLogo} alt="clefairy-logo" />
          News
        </StyledItem>
      </StyledLink>
      <StyledLink value="logout" to="#">
        <StyledItem value="logout">
          <img src={SnorlaxLogo} alt="snorlax-logo" />
          Logout
        </StyledItem>
      </StyledLink>
    </AppBar>
  );
};

export default Navigation;
