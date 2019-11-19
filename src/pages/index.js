import React from "react";
import { useRouteMatch, Link, useParams } from "react-router-dom";

import { useInfiniteScroll, usePokemonsFetcher } from "hooks/";
import PokemonListItem from "components/molecules/PokemonListItem";
import PokemonLoading from "components/molecules/PokemonLoading";
import { generateVersusLink } from "utils";

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
      <h1 className="text-4xl text-gray-700">Pokedex Battle</h1>
      <h2 className="text-xl mb-4 text-blue-500">{message}</h2>
      <div>
        {pokemons.map((pokemon, index) => (
          <Link
            to={
              isVersusPage
                ? generateVersusLink(pokemonName, pokemon.name)
                : pokemon.name
            }
            key={index}
          >
            <PokemonListItem index={index} pokemon={pokemon} />
          </Link>
        ))}
        {isLoading ? (
          <PokemonLoading cancel={() => dispatch({ type: "CANCEL" })} />
        ) : null}
      </div>
    </div>
  );
}

export default Homepage;
