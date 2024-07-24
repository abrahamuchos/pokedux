import { SET_POKEMONS } from "./type.js";
import { getPokemonDetails } from "../api/index.js";

export const setPokemons = ((payload) => ({
  type: SET_POKEMONS,
  payload,
}));


export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon))
  );

  return dispatch(setPokemons(pokemonsDetailed));
}


