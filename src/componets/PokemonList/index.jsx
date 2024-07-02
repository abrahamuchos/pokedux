import PokemonCard from "../PokemonCard/index.jsx";

import './style.css';

/**
 *
 * @param {Array<pokemon>} pokemons
 * @return {JSX.Element}
 * @constructor
 */
export default function PokemonList({pokemons}) {

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, i) => (
        <div key={i}>
          <PokemonCard/>
        </div>
      ))}
    </div>
  );
}

// Only for test purpose
PokemonList.defaultProps = {
  pokemons: Array(10).fill(' '),
}

