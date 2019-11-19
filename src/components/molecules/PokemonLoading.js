import React from "react";
import { animated, useSpring } from "react-spring";

import Pikachu from "components/Pikachu";
import ButtonAv from "components/atoms/ButtonAv";

function PokemonLoading({ cancel, displayText = "Summoning my friends" }) {
  const animation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0.5, transform: "translateX(-20%)" }
  });

  return (
    <animated.div style={animation} className="flex flex-col items-center">
      <Pikachu className="block" />
      <h3 className="text-xl mb-4">{displayText}</h3>
      <ButtonAv onClicked={() => cancel()}>Cancel</ButtonAv>
    </animated.div>
  );
}

export default PokemonLoading;
