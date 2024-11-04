import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc: undefined,
  },
];

const App: React.FC = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const nextPokemon = () => {
    setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
  };

  const previousPokemon = () => {
    setPokemonIndex((prevIndex) => (prevIndex - 1 + pokemonList.length) % pokemonList.length);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        {pokemonIndex > 0 && (
          <button onClick={previousPokemon}>
            Précédent
          </button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={nextPokemon}>
            Suivant
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
