import { SET_LOADING, SET_POKEMONS } from "./type.js";
import { getPokemonDetails } from "../api/index.js";

export const setPokemons = ((payload) => ({
  type: SET_POKEMONS,
  payload,
}));

/**
 * Set loading attribute
 * @type {function(boolean): {payload: boolean, type: string}}
 */
export const setLoading = ((payload) => ({
  type: SET_LOADING,
  payload,
}))


export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon))
  );

  dispatch(setPokemons(pokemonsDetailed));
  dispatch(setLoading(false))
}


