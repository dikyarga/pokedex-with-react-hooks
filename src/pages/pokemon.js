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
          <h1 className="text-4xl">{pokemon.name}</h1>
        </Fragment>
      )}
    </div>
  );
}

export default Pokemon;
