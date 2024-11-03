// src/components/PokemonCard.tsx
import React from 'react';

const PokemonCard: React.FC = () => {
  return (
    <figure>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Nom du Pokémon" />
      <figcaption>Bulbasaur</figcaption>
    </figure>
  );
};

export default PokemonCard;
