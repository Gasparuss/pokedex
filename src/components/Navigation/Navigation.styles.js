import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
`;

export const StyledNavigationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  min-width: 125px;
  height: 100%;
  &:hover {
    background: ${({ theme, value }) => {
      if (value === 'pokedex') return theme.colors.pokedex;
      if (value === 'favourites') return theme.colors.electric;
      if (value === 'clefairy') return theme.colors.fairy;
      if (value === 'logout') return theme.colors.normal;
      return theme.colors.grey;
    }};
    color: white;
    transition: all 0.2s ease-out;
  }

  img {
    position: relative;
    top: 15px;
    height: 40px;
    width: 50px;
  }
`;

export const StyledLink = styled(NavLink)`
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
