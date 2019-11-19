import { useEffect, useReducer } from "react";
import { fetchPokemons } from "apis";

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
        pokemons: [...state.pokemons, ...event.pokemons],
        pagination: event.pagination
      };
    case "REJECT":
      return {
        ...state,
        status: "failure",
        error: event.error
      };
    case "CANCEL":
      console.log("CANCELLLLLL");
      return {
        ...state,
        status: "idle"
      };
    default:
      return state;
  }
};

const initialState = {
  pokemons: [],
  status: "idle",
  error: null,
  pagination: {
    limit: 30,
    page: 1
  }
};

const usePokemonsFetcher = () => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  const { error, status, pokemons, pagination } = state;
  useEffect(() => {
    if (state.status === "loading") {
      let canceled = false;
      const { page, limit } = pagination;
      const offset = page === 1 ? 0 : (page - 1) * limit;

      fetchPokemons({ offset, limit })
        .then(({ results: pokemons }) => {
          if (canceled) return;
          dispatch({
            type: "RESOLVE",
            pokemons,
            pagination: {
              limit: limit,
              page: page + 1
            }
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
  }, [pagination, state.status]);

  useEffect(() => {
    dispatch({ type: "FETCH" });
  }, []); // on mounted only

  return {
    error,
    status,
    isLoading: status === "loading",
    pokemons,
    dispatch
  };
};

export default usePokemonsFetcher;
