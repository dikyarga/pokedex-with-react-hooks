import React, { Fragment } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import { useSpring, animated, useTrail } from "react-spring";

import usePokemonFetcher from "hooks/usePokemonFetcher";
import PokemonLoading from "components/molecules/PokemonLoading";
import PokemonPicture from "components/atoms/PokemonPicture";
import ButtonAv from "components/atoms/ButtonAv";

function Pokemon() {
  const { pokemonName, versusName } = useParams();
  let history = useHistory();
  const match = useRouteMatch("/:pokemonName/vs/:versusName");
  const isChooseEnemyPage = match !== null;
  const currentPokemonName = isChooseEnemyPage ? versusName : pokemonName;
  const { isLoading, pokemon, dispatch } = usePokemonFetcher(
    currentPokemonName
  );
  const animation = useSpring({
    opacity: !isLoading ? 1 : 0
  });

  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      {isLoading ? (
        <PokemonLoading
          cancel={() => dispatch({ type: "CANCEL" })}
          displayText={`Summoning ${currentPokemonName}`}
        />
      ) : (
        <Fragment>
          <PokemonPicture name={pokemon.name} id={pokemon.id} />
          <animated.h1 style={animation} className="text-4xl mb-2">
            {pokemon.name}
          </animated.h1>
          <div className="flex w-full mb-2">
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
          <ButtonAv onClicked={() => history.goBack()}>
            &#60; Choose another one
          </ButtonAv>
        </Fragment>
      )}
    </div>
  );
}

export default Pokemon;
