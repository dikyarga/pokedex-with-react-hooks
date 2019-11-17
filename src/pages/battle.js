import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import usePokemonFetcher from "../hooks/usePokemonFetcher";

function countTotalPoint(points) {
  return points.reduce((acc, current) => acc + current.base_stat, 0);
}

function Battle() {
  const { pokemonName, versusName } = useParams();
  const [winner, setWinner] = useState(null);
  const { isLoading: firstLoading, pokemon: firstPokemon } = usePokemonFetcher(
    pokemonName
  );
  const {
    isLoading: secondLoading,
    pokemon: secondPokemon
  } = usePokemonFetcher(versusName);
  const isBothFetched =
    Object.keys(firstPokemon).length > 0 &&
    Object.keys(secondPokemon).length > 0;
  useEffect(() => {
    if (isBothFetched) {
      const firstTotalPoint = countTotalPoint(firstPokemon.stats);
      const secondTotalPoint = countTotalPoint(secondPokemon.stats);
      const win =
        firstTotalPoint > secondTotalPoint ? firstPokemon : secondPokemon;
      setWinner(win);
    }
  }, [firstPokemon, firstPokemon.stats, isBothFetched, secondPokemon]);
  return (
    <Fragment>
      <h1>
        Battle {pokemonName} vs {versusName}
      </h1>
      <h3>{`${isBothFetched}`}</h3>
      {firstLoading ? "loading 1" : firstPokemon.name}
      {secondLoading ? "loading 2" : secondPokemon.name}
      <br />
      {winner !== null ? `${winner.name}` : "loading"}
    </Fragment>
  );
}

export default Battle;
