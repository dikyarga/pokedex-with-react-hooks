import React from "react";
import usePokemonsFetcher from "../hooks/usePokemonsFetcher";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import PokemonListItem from "../components/molecules/PokemonListItem";
import PokemonLoading from "../components/molecules/PokemonLoading";

function Homepage() {
  const { isLoading, pokemons, dispatch } = usePokemonsFetcher();
  useInfiniteScroll(() => dispatch({ type: "FETCH" }));

  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1 className="text-4xl">Pokedex</h1>
      <h2 className="text-xl">Choose your pokemon</h2>
      <br />
      {pokemons.map((pokemon, index) => (
        <PokemonListItem key={index} index={index} pokemon={pokemon} />
      ))}
      {isLoading ? (
        <PokemonLoading cancel={() => dispatch({ type: "CANCEL" })} />
      ) : null}
    </div>
  );
}

export default Homepage;
