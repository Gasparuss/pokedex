import * as React from 'react';
import {
  StyledNavigation,
  StyledLink,
  StyledNavigationItem
} from './Navigation.styles';
import PikachuLogo from '../../assets/img/pikachu.svg';
import PokeballLogo from '../../assets/img/pokeball.svg';
import SnorlaxLogo from '../../assets/img/snorlax.svg';
import ClefairyLogo from '../../assets/img/clefairy.svg';

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLink value="pokedex" to="/pokedex">
        <StyledNavigationItem value="pokedex">
          <img src={PokeballLogo} alt="pokeball" />
          <h3>Pokedex</h3>
        </StyledNavigationItem>
      </StyledLink>
      <StyledLink value="favourites" to="/favourites">
        <StyledNavigationItem value="favourites">
          <img src={PikachuLogo} alt="favourites" />
          <h3>Favourites</h3>
        </StyledNavigationItem>
      </StyledLink>
      <StyledLink value="clefairy" to="/news">
        <StyledNavigationItem value="clefairy">
          <img src={ClefairyLogo} alt="clefairy" />
          <h3>News</h3>
        </StyledNavigationItem>
      </StyledLink>
      <StyledLink value="logout" to="/logout">
        <StyledNavigationItem value="logout">
          <img src={SnorlaxLogo} alt="logout" />
          <h3>Logout</h3>
        </StyledNavigationItem>
      </StyledLink>
    </StyledNavigation>
  );
};

export default Navigation;
