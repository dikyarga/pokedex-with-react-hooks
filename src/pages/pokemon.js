import React from "react";
import { useParams } from "react-router-dom";
function Pokemon() {
  const { pokemonName } = useParams();
  return <h2>{pokemonName}</h2>;
}

export default Pokemon;
