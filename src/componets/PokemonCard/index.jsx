/**
 * @typedef {Object} pokemon
 * @property {number} id
 * @property {string} name
 * @property {string} url
 */
/**
 * @typedef {Object} pokemonDetail
 * @property {number} id
 * @property {string} name
 * @property {number} order
 * @property {number} weight
 * @property {abilityArr} abilities
 * @property {number} base_experience
 * @property {species} species
 * @property {sprites} sprites
 * @property {typeArr} types
 * @property {boolean|undefined} favorite
 */
/**
 * @typedef {Array} abilityArr
 * @property {boolean} is_hidden
 * @property {number} slot
 * @property {ability} ability
 */
/**
 * @typedef {Object} ability
 * @property {string} name
 * @property {string} url
 */
/**
 * @typedef {Object} species
 * @property {string} name
 * @property {string} url
 */
/**
 * @typedef {Object} sprites
 * @property {string|null} back_default - url image
 * @property {string|null} back_female - url image
 * @property {string|null} back_shiny - url image
 * @property {string|null} back_shiny_female - url image
 * @property {string|null} front_default - url image
 * @property {string|null} front_female - url image
 * @property {string|null} front_shiny - url image
 * @property {string|null}  front_shiny_female - url image
 */
/**
 * @typedef {Array}typeArr
 * @property {number} slot
 * @property {type} type
 */
/**
 * @typedef {Object} type
 * @typedef {string} name
 * @typedef {string} url
 */
import { Card, Tag } from "antd";
import StarButton from "../StarButton/index.jsx";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../actions/index.js";

/**
 *
 * @param {number} id
 * @param {string} name
 * @param {string|null} img
 * @param {abilityArr} abilities
 * @param {typeArr} types
 * @param {boolean|undefined} isFavorite
 * @return {JSX.Element}
 * @constructor
 */
export default function PokemonCard({id, name, img, abilities, types, isFavorite = false}) {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite({id: id}))
  }

  return (
    <Card
      title={name}
      cover={<img src={img} alt={name}/>}
      extra={<StarButton isFavorite={isFavorite} onClick={handleFavorite}/>}
    >

      {/*Types*/}
      <div>
        <h3>Types</h3>
        {types.map((type, i) => <Tag color='geekblue' key={i}>{type.type.name}</Tag>)}
      </div>

      {/*End Types*/}


      {/* Abilities*/}
      <div>
        <h4>Abilities</h4>
        <ul>
          {abilities.map((ability, i) => <li key={i}>{ability.ability.name}</li>)}
        </ul>
      </div>
      {/* End Abilities*/}
    </Card>
  );
}