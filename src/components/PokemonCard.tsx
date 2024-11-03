import React from 'react';

// Liste de Pokémon
const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
    imgSrc: undefined, // Pas d'image définie pour Mew
  },
];

const PokemonCard: React.FC = () => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <figure key={index}>
          {pokemon.imgSrc ? (
            <img 
              src={pokemon.imgSrc} 
              alt={`Image de ${pokemon.name}`} 
            />
          ) : (
            <p>???</p>
          )}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default PokemonCard;
