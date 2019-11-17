import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import usePokemonsFetcher from "../hooks/usePokemonsFetcher";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import PokemonListItem from "../components/molecules/PokemonListItem";
import PokemonLoading from "../components/molecules/PokemonLoading";
import "./index.css";

function Homepage() {
  const { isLoading, pokemons, dispatch } = usePokemonsFetcher();
  useInfiniteScroll(() => dispatch({ type: "FETCH" }));

  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1 className="text-4xl">Pokedex</h1>
      <h2 className="text-xl mb-4">Choose your pokemon</h2>
      <TransitionGroup className="pokemon-list">
        {pokemons.map((pokemon, index) => (
          <CSSTransition timeout={500} key={index} classNames="fade">
            <PokemonListItem key={index} index={index} pokemon={pokemon} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {isLoading ? (
        <PokemonLoading cancel={() => dispatch({ type: "CANCEL" })} />
      ) : null}
    </div>
  );
}

export default Homepage;
