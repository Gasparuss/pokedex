import React from 'react';
import Navigation from '../Navigation/Navigation';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default MainTemplate;
