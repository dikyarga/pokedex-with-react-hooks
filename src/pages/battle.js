import React, { Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import PokemonPicture from "components/atoms/PokemonPicture";
import ButtonAv from "components/atoms/ButtonAv";
import usePokemonFetcher from "hooks/usePokemonFetcher";
import { countTotalPoint } from "utils";

function Battle() {
  let history = useHistory();
  const { pokemonName, versusName } = useParams();
  const [winner, setWinner] = useState(null);
  const [firstTotalPoint, setFirstTotalPoint] = useState(0);
  const [secondTotalPoint, setSecondTotalPoint] = useState(0);
  const { pokemon: firstPokemon } = usePokemonFetcher(pokemonName);
  const { pokemon: secondPokemon } = usePokemonFetcher(versusName);
  const isBothFetched =
    Object.keys(firstPokemon).length > 0 &&
    Object.keys(secondPokemon).length > 0;

  useEffect(() => {
    if (isBothFetched) {
      const firstTotal = countTotalPoint(firstPokemon.stats);
      const secondTotal = countTotalPoint(secondPokemon.stats);
      const theWinner = firstTotal > secondTotal ? firstPokemon : secondPokemon;

      setFirstTotalPoint(firstTotal);
      setSecondTotalPoint(secondTotal);
      setWinner(theWinner);
    }
  }, [firstPokemon, isBothFetched, secondPokemon]);
  const animation = useSpring({
    opacity: isBothFetched ? 1 : 0
  });

  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1 className="text-3xl mb-8">The Pokemon Battle</h1>
      <div className="flex w-full mb-4">
        <div className="flex-1 text-center ">
          <h2 className="text-2xl ">{pokemonName}</h2>
          {isBothFetched ? (
            <h2 className="text-2xl text-yellow-500 font-black">
              {firstTotalPoint}
            </h2>
          ) : (
            "calculating"
          )}
          <h3 className="text-l text-gray-700">total point</h3>
        </div>
        <div className="flex-1 text-center py-2 m-2">
          <h3 className="text-2xl text-gray-700">VS</h3>
        </div>
        <div className="flex-1 text-center">
          <h2 className="text-2xl">{versusName}</h2>
          {isBothFetched ? (
            <h2 className="text-2xl text-yellow-500 font-black">
              {secondTotalPoint}
            </h2>
          ) : (
            "calculating"
          )}
          <h3 className="text-l text-gray-700">total point</h3>
        </div>
      </div>
      <br />
      {winner !== null ? (
        <Fragment>
          <animated.h3 style={animation} className="text-xl mb-2">
            The winner is
          </animated.h3>
          <PokemonPicture name={winner.name} id={winner.id} />
          <h2 className="text-3xl uppercase text-blue-500 font-black mb-4">
            {winner.name}
          </h2>
          <h3 className="text-xl">It's mean</h3>
          {winner === firstPokemon ? (
            <h2 className="text-3xl uppercase text-green-500 font-black mb-4">
              YOU WON!
            </h2>
          ) : (
            <h2 className="text-3xl uppercase text-red-500 font-black mb-4">
              YOU Lose!
            </h2>
          )}
          <ButtonAv onClicked={() => history.push("/")}>Play again!</ButtonAv>
        </Fragment>
      ) : (
        "Fighting..."
      )}
    </div>
  );
}

export default Battle;
