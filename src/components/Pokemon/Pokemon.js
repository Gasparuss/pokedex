import React from 'react';

import { useParams } from 'react-router-dom';

const Pokemon = () => {
  const { id } = useParams();
  return <div>This is pokemon number: {id}</div>;
};

export default Pokemon;
