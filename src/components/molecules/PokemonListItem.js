import React from "react";
import { Link } from "react-router-dom";

function PokemonListItem({ pokemon, index }) {
  return (
    <Link className="Pokemon-list--item" to={pokemon.name}>
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index}.png`}
          alt={pokemon.name}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{pokemon.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default PokemonListItem;
