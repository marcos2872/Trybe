import React from 'react'
import ReactDOM from 'react-dom/client'
import './pokemon.css'
import Pokedex from './Pokedex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='App'>
    <h1>Pokedex</h1>
    <Pokedex />
  </div>   
)
