import PokemonCard from "../PokemonCard/index.jsx";

import './style.css';

/**
 *
 * @param {Array<pokemon|null>} pokemons
 * @return {JSX.Element}
 * @constructor
 */
export default function PokemonList({pokemons}) {

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, i) => (
        <div key={i}>
          <PokemonCard name={pokemon.name}/>
        </div>
      ))}
    </div>
  );
}
