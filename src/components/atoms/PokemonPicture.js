import React from "react";
function PokemonPicture({ id, name }) {
  return (
    <img
      className="w-10 h-10 rounded-full mr-4"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
      alt={name}
    />
  );
}

export default PokemonPicture;
