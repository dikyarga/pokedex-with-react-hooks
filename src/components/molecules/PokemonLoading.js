import React, { Fragment } from "react";

import Pikachu from "../Pikachu";

function PokemonLoading({ cancel }) {
  return (
    <Fragment>
      <Pikachu />
      <h3 className="text-xl mb-4">Summoning my friends</h3>
      <button
        className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
        onClick={() => cancel()}
      >
        Cancel
      </button>
    </Fragment>
  );
}

export default PokemonLoading;
