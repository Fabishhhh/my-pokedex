import React from 'react';

interface PokemonProps {
  pokemon: {
    name: string;
    imgSrc?: string; 
  };
}

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

export default PokemonCard;

