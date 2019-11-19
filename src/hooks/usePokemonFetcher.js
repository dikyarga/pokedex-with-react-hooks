import { useEffect, useReducer } from "react";
import { fetchPokemon } from "apis";
const pokemonReducer = (state, event) => {
  switch (event.type) {
    case "FETCH":
      return {
        ...state,
        status: "loading"
      };
    case "RESOLVE":
      return {
        ...state,
        status: "success",
        pokemon: event.pokemon
      };
    case "REJECT":
      return {
        ...state,
        status: "failure",
        error: event.error
      };
    case "CANCEL":
      return {
        ...state,
        status: "idle"
      };
    default:
      return state;
  }
};

const initialState = {
  pokemon: {},
  status: "idle",
  error: null
};

const usePokemonFetcher = pokemonName => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  const { error, status, pokemon } = state;
  useEffect(() => {
    if (state.status === "loading") {
      let canceled = false;

      fetchPokemon(pokemonName)
        .then(pokemon => {
          if (canceled) return;
          dispatch({
            type: "RESOLVE",
            pokemon
          });
        })
        .catch(error => {
          console.log({
            error
          });
          if (canceled) return;
          dispatch({
            type: "REJECT",
            error
          });
        });

      return () => {
        canceled = true;
      };
    }
  }, [pokemonName, state.status]);

  useEffect(() => {
    dispatch({ type: "FETCH" });
  }, []); // on mounted only

  return {
    error,
    status,
    isLoading: status === "loading",
    pokemon,
    dispatch
  };
};

export default usePokemonFetcher;
