import PokemonCard from "../PokemonCard/index.jsx";

import './style.css';

/**
 *
 * @param {Array<pokemonDetail|null>} pokemons
 * @return {JSX.Element}
 * @constructor
 */
export default function PokemonList({pokemons}) {

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, i) => (
        <div key={i}>
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon?.sprites.front_default}
            abilities={pokemon?.abilities}
            types={pokemon.types}
            isFavorite={pokemon.favorite}
          />
        </div>
      ))}
    </div>
  );
}
