import React from 'react';
import Stack from '@mui/material/Stack';
import { StyledButton } from '../Button/Button';

const Pagination = ({ gotoPrevPage, gotoNextPage }) => {
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
      {gotoPrevPage && <StyledButton onClick={gotoPrevPage}>Prev</StyledButton>}
      {gotoNextPage && <StyledButton onClick={gotoNextPage}>Next</StyledButton>}
    </Stack>
  );
};

export default Pagination;
