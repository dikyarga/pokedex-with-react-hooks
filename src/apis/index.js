import qs from "querystring";
import urlJoin from "url-join";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const fetcher = (path = "", params = {}) => {
  return fetch(urlJoin(BASE_URL, path, `?${qs.stringify(params)}`)).then(res =>
    res.json()
  );
};

const fetchPokemons = params => fetcher("", params);
const fetchPokemon = pokemonName => fetcher(pokemonName);

export { fetchPokemons, fetchPokemon };
