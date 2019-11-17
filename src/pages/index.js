import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import usePokemonsFetcher from "../hooks/usePokemonsFetcher";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Pokemon = ({ pokemon }) => (
  <Fragment>
    <Link className="Pokemon-list--item" to={pokemon.name}>
      {pokemon.name}
    </Link>
    <br />
  </Fragment>
);

function Homepage() {
  const { error, status, isLoading, pokemons, dispatch } = usePokemonsFetcher();
  useInfiniteScroll(() => dispatch({ type: "FETCH" }));

  return (
    <div className="App">
      <h2>{isLoading ? "Fetching" : "Idle"}</h2>
      <h2>{status === "failure" ? error.message : "Idle"}</h2>
      <button onClick={() => dispatch({ type: "CANCEL" })}>Cancel</button>
      <br />
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} index={index} pokemon={pokemon} />
      ))}
      {isLoading ? <h3>Fetch more pokemons</h3> : null}
      <button onClick={() => dispatch({ type: "FETCH" })}>
        Load more pokemenon
      </button>
    </div>
  );
}

export default Homepage;
