import React from "react";
import PokemonPicture from "components/atoms/PokemonPicture";

function PokemonListItem({ pokemon, index }) {
  return (
    <div className="max-w w-full rounded overflow-hidden shadow-md m-2">
      <div className="w-full flex items-center p-2">
        <PokemonPicture name={pokemon.name} id={index} />
        <h3 className="text-gray-900 leading-none text-xl">{pokemon.name}</h3>
      </div>
    </div>
  );
}

export default PokemonListItem;
