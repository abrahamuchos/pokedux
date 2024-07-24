import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Spin } from "antd";
import { getPokemonsWithDetails, setLoading } from "./actions/index.js";
import Nav from "./componets/Nav/index.jsx";
import Searcher from "./componets/Searcher.jsx";
import PokemonList from "./componets/PokemonList";
import { getPokemons } from "./api/index.js";


import './App.css'


function App() {
  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    }

    fetchPokemons().then();
  }, []);

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

      {loading
        ? <Col offset={12}>
            <Spin spinning size='large'/>
          </Col>
        : <>
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