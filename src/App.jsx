import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "antd";
import Nav from "./componets/Nav/index.jsx";
import Searcher from "./componets/Searcher.jsx";
import PokemonList from "./componets/PokemonList";
import { getPokemons } from "./api/index.js";
import { getPokemonsWithDetails } from "./actions/index.js";


import './App.css'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [pokemons, setPokemons] = useState(/**@type {Array<pokemon|null>} pokemons **/[]);

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    }

    fetchPokemons().then( () => setIsLoading(false));
  }, []);

  return (
    <>
      {/*Navigation*/}
      <Col>
        <Nav/>
      </Col>
      {/*End Navigation*/}

      {isLoading
        ? <h1>Cargando...</h1>
        : <>
          {/*Search bar*/}
          <Col span={8} offset={8}>
            <Searcher/>
          </Col>
          {/*End Search bar*/}

          {/*List*/}
          <Col span={24}>
            <PokemonList pokemons={pokemons}/>
          </Col>
          {/*End List*/}
        </>
      }

    </>
  )
}

export default App;