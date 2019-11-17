import React, { Fragment } from "react";

import Pikachu from "../Pikachu";

function PokemonLoading({ cancel, displayText = "Summoning my friends" }) {
  return (
    <Fragment>
      <Pikachu />
      <h3 className="text-xl mb-4">{displayText}</h3>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => cancel()}
      >
        Cancel
      </button>
    </Fragment>
  );
}

export default PokemonLoading;
