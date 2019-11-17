import React, { Fragment } from "react";
import usePokemonsFetcher from "../hooks/usePokemonsFetcher";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import PokemonListItem from "../components/molecules/PokemonListItem";

function Homepage() {
  const { error, status, isLoading, pokemons, dispatch } = usePokemonsFetcher();
  useInfiniteScroll(() => dispatch({ type: "FETCH" }));

  return (
    <div className="App">
      <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
        <h1>Super cool page</h1>
      </div>
      <h2>{isLoading ? "Fetching" : "Idle"}</h2>
      <h2>{status === "failure" ? error.message : "Idle"}</h2>
      <button onClick={() => dispatch({ type: "CANCEL" })}>Cancel</button>
      <br />
      {pokemons.map((pokemon, index) => (
        <PokemonListItem key={index} index={index} pokemon={pokemon} />
      ))}
      {isLoading ? <h3>Fetch more pokemons</h3> : null}
      <button onClick={() => dispatch({ type: "FETCH" })}>
        Load more pokemenon
      </button>
    </div>
  );
}

export default Homepage;
