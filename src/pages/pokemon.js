import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import usePokemonFetcher from "../hooks/usePokemonFetcher";
function Pokemon() {
  const { pokemonName } = useParams();
  const { isLoading, pokemon } = usePokemonFetcher(pokemonName);
  return (
    <Fragment>
      {isLoading ? <h3>Loading {pokemonName}</h3> : <h1>{pokemon.name}</h1>}
    </Fragment>
  );
}

export default Pokemon;
