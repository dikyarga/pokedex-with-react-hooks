import React from "react";
import PokemonPicture from "components/atoms/PokemonPicture";
import { animated, useSpring } from "react-spring";

function PokemonListItem({ pokemon, index }) {
  const animation = useSpring({
    opacity: 1,
    transform: "scale3d(1,1,1)",
    from: { opacity: 0, transform: "scale3d(0,0,0)" }
  });

  return (
    <animated.div
      style={animation}
      className="max-w w-full rounded overflow-hidden shadow-md m-2 qa-pokemon-list-item"
    >
      <div className="w-full flex items-center p-2">
        <PokemonPicture name={pokemon.name} id={index} />
        <h3 className="text-gray-900 leading-none text-xl">{pokemon.name}</h3>
      </div>
    </animated.div>
  );
}

export default PokemonListItem;
