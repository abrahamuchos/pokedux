import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from "redux-thunk";
import App from './App.jsx'
import { pokemonsReducer } from './reducers/pokemons.js'
import { logger } from "./middlewares/index.js";

import 'antd/dist/reset.css';


const composeAlternative =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeAlternative(applyMiddleware(thunk, logger));

const store = createStore(pokemonsReducer, composeEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)



