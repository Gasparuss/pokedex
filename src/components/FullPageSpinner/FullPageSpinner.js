import React from 'react';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';
import { Backdrop, CircularProgress } from '@mui/material';

const Spinner = styled(FaSpinner)`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  alight-items: center;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  alight-items: center;
`;

const FullPageSpinner = () => {
  return (
    <Wrapper>
      <Backdrop open={true} sx={{ backgroundColor: 'white', opacity: 0.9 }}>
        <Spinner />
      </Backdrop>
    </Wrapper>
  );
};

export default FullPageSpinner;
