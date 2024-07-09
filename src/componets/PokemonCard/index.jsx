/**
 * @typedef {Object} pokemon
 * @property {integer} id
 * @property {string} name
 * @property {string} img
 * @property {string} description
 */
import { Card } from "antd";
import Meta from "antd/lib/card/Meta.js";
import { StarOutlined } from "@ant-design/icons";

/**
 *
 * @param {string }name
 * @param {string|null} img
 * @param {string|null} description
 * @return {JSX.Element}
 * @constructor
 */
export default function PokemonCard({name, img, description}) {


  return (
    <Card
      title={name}
      cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt={name}/>}
      extra={<StarOutlined/>}
    >

      <Meta description={description ?? 'N/A'}/>
    </Card>
  );
}