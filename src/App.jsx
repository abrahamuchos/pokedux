import { Col } from "antd";
import Searcher from "./componets/Searcher.jsx";
import PokemonList from "./componets/PokemonList";


import './App.css'

function App() {

  return (
    <>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <Col span={24}>
        <PokemonList/>
      </Col>
    </>
  )
}

export default App
