import React, { Fragment } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import usePokemonFetcher from "../hooks/usePokemonFetcher";
import PokemonLoading from "../components/molecules/PokemonLoading";
import PokemonPicture from "../components/atoms/PokemonPicture";

function Pokemon() {
  const { pokemonName, versusName } = useParams();
  let history = useHistory();
  const match = useRouteMatch("/:pokemonName/vs/:versusName");
  const isChooseEnemyPage = match !== null;
  const currentPokemonName = isChooseEnemyPage ? versusName : pokemonName;
  const { isLoading, pokemon, dispatch } = usePokemonFetcher(
    currentPokemonName
  );
  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4"
        onClick={() => history.goBack()}
      >
        &#60; Choose another one
      </button>
      {isLoading ? (
        <PokemonLoading
          cancel={() => dispatch({ type: "CANCEL" })}
          displayText={`Summoning ${pokemonName}`}
        />
      ) : (
        <Fragment>
          <PokemonPicture name={pokemon.name} id={pokemon.id} />
          <h1 className="text-4xl mb-2">{pokemon.name}</h1>
          <div className="flex w-full">
            <div className="flex-1 text-center px-4 py-2 m-2">
              <h3 className="text-l text-gray-700">Height</h3>
              <h2 className="text-2xl">{pokemon.height} inch</h2>
            </div>
            <div className="flex-1 text-center px-4 py-2 m-2">
              <h3 className="text-l text-gray-700">Weight</h3>
              <h2 className="text-2xl">{pokemon.weight} ons</h2>
            </div>
          </div>
          {isChooseEnemyPage ? (
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4"
              onClick={() =>
                history.push(`/${pokemonName}/vs/${versusName}/battle`)
              }
            >
              Battle with {pokemonName}
            </button>
          ) : (
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4"
              onClick={() => history.push(`/${pokemonName}/vs`)}
            >
              Select
            </button>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default Pokemon;
