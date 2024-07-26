import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./type.js";
import { getPokemonDetails } from "../api/index.js";

/**
 *
 * @param {Array<pokemon|null>} payload
 * @return {{payload: Array<pokemon|null>, type: string}}
 */
export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

/**
 *
 * @param {boolean} payload
 * @return {{payload: boolean, type: string}}
 */
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
})

/**
 *
 * @param {{id: number}} payload - Pokemon id
 * @return {{payload: boolean, type: string}}
 */
export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

/**
 * Get all Pokémon with info
 * @param {Array<pokemon|null>} pokemons
 * @return {(function(*): Promise<Array<pokemonDetail>>)|*}
 */
export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon))
  );

  dispatch(setPokemons(pokemonsDetailed));
  dispatch(setLoading(false))
}



