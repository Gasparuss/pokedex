import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, CardMedia, CardContent } from '@mui/material';
import { PokeCard } from '../../atoms/PokeCard/PokeCard';
import {
  findColor,
  getImageSourcefromID,
  getTypeIcon,
  toFirstCharUppercase
} from '../../../utils/GlobalFunctions';
import { StyledTypography } from '../../atoms/Typography/Typography';

const PokemonsListItem = ({ pokemonData: { name, id, types } }) => {
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
};

export default PokemonsListItem;
