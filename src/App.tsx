import React from 'react';
import PokemonCard from './components/PokemonCard';

// Liste de Pokémon
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc: null,
  },
];

// Composant App
const App: React.FC = () => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default App;
