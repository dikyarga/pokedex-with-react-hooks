import React, { Fragment } from "react";
import Pikachu from "components/Pikachu";
import ButtonAv from "components/atoms/ButtonAv";

function PokemonLoading({ cancel, displayText = "Summoning my friends" }) {
  return (
    <Fragment>
      <Pikachu />
      <h3 className="text-xl mb-4">{displayText}</h3>
      <ButtonAv onClicked={() => cancel()}>Cancel</ButtonAv>
    </Fragment>
  );
}

export default PokemonLoading;
