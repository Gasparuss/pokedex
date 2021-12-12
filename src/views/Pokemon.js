import React from 'react';
import { useParams } from 'react-router-dom';

const Pokemon = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{`This is pokemon page${id}`}</h1>
    </div>
  );
};

export default Pokemon;
