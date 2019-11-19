import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRouteMatch, Link, useParams } from "react-router-dom";

import { useInfiniteScroll, usePokemonsFetcher } from "hooks/";
import PokemonListItem from "components/molecules/PokemonListItem";
import PokemonLoading from "components/molecules/PokemonLoading";
import "./index.css";

function generateVersusLink(firstPokemon, secondPokemon) {
  return `/${firstPokemon}/vs/${secondPokemon}`;
}

function Homepage() {
  const { isLoading, pokemons, dispatch } = usePokemonsFetcher();
  const match = useRouteMatch("/:pokemonName/vs");
  const { pokemonName } = useParams();
  const isVersusPage = match !== null;
  const message = isVersusPage
    ? "Choose your enemy"
    : "Choose your pokemon first";

  useInfiniteScroll(() => dispatch({ type: "FETCH" }));

  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1 className="text-4xl">Pokedex Battle</h1>
      <h2 className="text-xl mb-4">{message}</h2>
      <TransitionGroup className="pokemon-list">
        {pokemons.map((pokemon, index) => (
          <CSSTransition timeout={500} key={index} classNames="fade">
            <Link
              to={
                isVersusPage
                  ? generateVersusLink(pokemonName, pokemon.name)
                  : pokemon.name
              }
            >
              <PokemonListItem key={index} index={index} pokemon={pokemon} />
            </Link>
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
