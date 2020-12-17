import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from './components/PokeCard/PokeCard'

const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    getPokeList()
  }, []) // Usado com funcionalidade de um componentDidMount

  const getPokeList = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(error => {
        console.log("Erro ao buscar lista de pokemons:", error.message)
      })
  }

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.length ?
          pokeList.map((pokemon) => {
            return <option
              key={pokemon.url} value={pokemon.name}

            >{pokemon.name}</option>
          }) : <option value={""}>Carregando...</option>  
      }
      </select>
      {pokeName ? <PokeCard pokemon={pokeName} /> : <></>}
    </div>
  )
}

export default App;
