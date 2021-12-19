import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;

  &.active {
    border-bottom: 1px solid
      ${({ theme, value }) => {
        if (value === 'pokedex') return theme.colors.pokedex;
      }};
  }
`;

export const StyledItem = styled.div`
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
