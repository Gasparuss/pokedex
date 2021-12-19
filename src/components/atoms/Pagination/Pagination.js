import React from 'react';
import Stack from '@mui/material/Stack';
import { StyledButton } from '../Button/Button';

export const Pagination = ({ handlePrevClick, handleNextClick }) => {
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
      {handlePrevClick && (
        <StyledButton onClick={handlePrevClick}>Prev</StyledButton>
      )}
      {handleNextClick && (
        <StyledButton onClick={handleNextClick}>Next</StyledButton>
      )}
    </Stack>
  );
};
