import React from "react";
import { Link } from "react-router-dom";
import PokemonPicture from "../atoms/PokemonPicture";

function PokemonListItem({ pokemon, index }) {
  return (
    <Link to={pokemon.name}>
      <div className="max-w w-full rounded overflow-hidden shadow-md m-2">
        <div className="w-full flex items-center p-2">
          <PokemonPicture name={pokemon.name} id={index} />
          <h3 className="text-gray-900 leading-none text-xl">{pokemon.name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default PokemonListItem;
