import { Col } from "antd";
import Nav from "./componets/Nav/index.jsx";
import Searcher from "./componets/Searcher.jsx";
import PokemonList from "./componets/PokemonList";


import './App.css'

function App() {

  return (
    <>
      {/*Navigation*/}
      <Col>
        <Nav/>
      </Col>
      {/*End Navigation*/}

      {/*Search bar*/}
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {/*End Search bar*/}

      {/*List*/}
      <Col span={24}>
        <PokemonList/>
      </Col>
      {/*End List*/}
    </>
  )
}

export default App
