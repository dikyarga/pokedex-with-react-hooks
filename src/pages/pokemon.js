import React, { Fragment } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import usePokemonFetcher from "../hooks/usePokemonFetcher";
import PokemonLoading from "../components/molecules/PokemonLoading";
import PokemonPicture from "../components/atoms/PokemonPicture";
import ButtonAv from "../components/atoms/ButtonAv";

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
      <ButtonAv onClicked={() => history.goBack()}>
        &#60; Choose another one
      </ButtonAv>
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
            <ButtonAv
              isPrimary
              onClicked={() =>
                history.push(`/${pokemonName}/vs/${versusName}/battle`)
              }
            >
              Battle with {pokemonName}
            </ButtonAv>
          ) : (
            <ButtonAv
              isPrimary
              onClicked={() => history.push(`/${pokemonName}/vs`)}
            >
              Select
            </ButtonAv>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default Pokemon;
