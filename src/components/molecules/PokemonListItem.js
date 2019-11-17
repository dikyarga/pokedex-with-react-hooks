import React from "react";
import { Link } from "react-router-dom";

function PokemonListItem({ pokemon, index }) {
  return (
    <Link to={pokemon.name}>
      <div className="max-w w-full rounded overflow-hidden shadow-md m-2">
        <div className="w-full flex items-center p-2">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index}.png`}
            alt={pokemon.name}
          />
          <h3 className="text-gray-900 leading-none text-xl">{pokemon.name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default PokemonListItem;
