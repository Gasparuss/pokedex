import { CardMedia } from '@mui/material';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const StyledCardMedia = styled(CardMedia)`
  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
`;
