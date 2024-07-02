/**
 * @typedef {Object} pokemon
 * @property {integer} id
 * @property {string} title
 * @property {string} img
 * @property {string} description
 */
import { Card } from "antd";
import Meta from "antd/lib/card/Meta.js";
import { StarOutlined } from "@ant-design/icons";


export default function PokemonCard() {


  return (
    <Card
      title={'Ditto'}
      cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt={'Ditto'}/>}
      extra={<StarOutlined/>}
    >

      <Meta description='fire, magic'/>

    </Card>
  );
}