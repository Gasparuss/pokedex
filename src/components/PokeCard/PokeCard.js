import { Card } from '@mui/material';
import styled from 'styled-components';

export const PokeCard = styled(Card)`
  &:hover {
    animation: bounce 0.3s ease-in-out;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-3px);
    }

    70% {
      transform: translateY(0px);
    }
  }
`;
