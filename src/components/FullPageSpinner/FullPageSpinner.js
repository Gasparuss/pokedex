import React from 'react';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';
import { Backdrop, CircularProgress } from '@mui/material';

const Spinner = styled(FaSpinner)`
  height: 300px;
  width: 300px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const FullPageSpinner = () => {
  return (
    <Backdrop open={true} sx={{ backgroundColor: 'white' }}>
      <Spinner />
    </Backdrop>
  );
};

export default FullPageSpinner;
