import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import usePokemonFetcher from "../hooks/usePokemonFetcher";
import PokemonLoading from "../components/molecules/PokemonLoading";
import PokemonPicture from "../components/atoms/PokemonPicture";

function Pokemon() {
  const { pokemonName } = useParams();
  const { isLoading, pokemon, dispatch } = usePokemonFetcher(pokemonName);
  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      {isLoading ? (
        <PokemonLoading
          cancel={() => dispatch({ type: "CANCEL" })}
          displayText={`Summoning ${pokemonName}`}
        />
      ) : (
        <Fragment>
          <PokemonPicture name={pokemon.name} id={pokemon.id} />
          <h1 className="text-4xl mb-4">{pokemon.name}</h1>
          <div class="flex w-full">
            <div class="flex-1 text-center px-4 py-2 m-2">
              <h3 className="text-l text-gray-700">Height</h3>
              <h2 className="text-2xl">{pokemon.height} inch</h2>
            </div>
            <div class="flex-1 text-center px-4 py-2 m-2">
              <h3 className="text-l text-gray-700">Weight</h3>
              <h2 className="text-2xl">{pokemon.weight} ons</h2>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default Pokemon;
