import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/type.js";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {...state, pokemons: action.payload};

    case SET_FAVORITE:
      console.log('FLAG>>', action.payload)
      const newPokemonList = [...state.pokemons];
      const currentPokemonIndex = newPokemonList.findIndex((pokemon) => (
        pokemon.id === action.payload.id
      ));
      if(currentPokemonIndex < 0){
        return state;
      }else{
        newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
        return {...state,pokemons: newPokemonList}
      }

    case SET_LOADING:
      return {...state, loading: action.payload};

    default:
      return state;
  }
}


