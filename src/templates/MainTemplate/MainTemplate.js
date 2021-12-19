import React from 'react';
import { Navigation } from '../../components/organisms/Navigation/Navigation';

export const MainTemplate = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};
