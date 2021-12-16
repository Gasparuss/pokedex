import { theme } from '../assets/styles/theme';
import normal from '../assets/icons/normal.png';
import fire from '../assets/icons/fire.png';
import fighting from '../assets/icons/fighting.png';
import water from '../assets/icons/water.png';
import flying from '../assets/icons/flying.png';
import grass from '../assets/icons/grass.png';
import poison from '../assets/icons/poison.png';
import electric from '../assets/icons/electric.png';
import ground from '../assets/icons/ground.png';
import psychic from '../assets/icons/psychic.png';
import rock from '../assets/icons/rock.png';
import ice from '../assets/icons/ice.png';
import bug from '../assets/icons/bug.png';
import dragon from '../assets/icons/dragon.png';
import ghost from '../assets/icons/ghost.png';
import dark from '../assets/icons/dark.png';
import steel from '../assets/icons/steel.png';
import fairy from '../assets/icons/fairy.png';

export const getTypeIcon = (type) => {
  const colors = {
    normal,
    fire,
    fighting,
    water,
    flying,
    grass,
    poison,
    electric,
    ground,
    psychic,
    rock,
    ice,
    bug,
    dragon,
    ghost,
    dark,
    steel,
    fairy
  };
  const getIcon = Object.entries(colors).filter(([key, _]) => key === type);
  return getIcon[0];
};

export const findColor = (color) => {
  const getColor = Object.entries(theme.colors).filter(
    ([key, _]) => key === color
  );
  return getColor[0];
};

export const getIDStringfromID = (id) => {
  if (id >= 10 && id < 100) return `0${id}`;
  if (id >= 100) return `${id}`;
  return `00${id}`;
};

export const getImageSourcefromID = (id) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${getIDStringfromID(
    id
  )}.png`;
};

export const toFirstCharUppercase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const extractEvolutionChain = (response) => {
  let evoChain = [];
  let evoData = response.chain;

  do {
    evoChain.push({
      name: evoData.species.name,
      url: evoData.species.url
    });
    evoData = evoData['evolves_to'][0];
  } while (evoData && evoData.hasOwnProperty('evolves_to'));

  return evoChain;
};

export const getIDStringfromURLEvolution = (url) => {
  const tempURL = url.split('/');
  const id = +tempURL[tempURL.length - 2];
  if (id >= 10 && id < 100) return id;
  if (id >= 100) return `${id}`;
  return id;
};

export const getIDStringfromURL = (url) => {
  const tempURL = url.split('/');
  const id = +tempURL[tempURL.length - 2];
  if (id >= 10 && id < 100) return `0${id}`;
  if (id >= 100) return `${id}`;
  return `00${id}`;
};

export const getImageSourceFromURL = (id) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${getIDStringfromURL(
    id
  )}.png`;
};
