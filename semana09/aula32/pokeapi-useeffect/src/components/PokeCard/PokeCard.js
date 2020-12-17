import axios from 'axios';
import { useEffect, useState } from 'react';

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        getPokemon(props.pokemon)
    }, [props.pokemon])

    const getPokemon = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                setPokemon(response.data)
            })
            .catch(error => {
                console.log(`Erro ao buscar pokemon ${pokeName}.`, error.message)
            })
    }

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <p>Peso: {pokemon.weight} kg</p>
            <img src={pokemon.sprites && pokemon.sprites.front_default} alt={pokemon.name} />
            <h4>Tipo:</h4>
            {pokemon.types && pokemon.types.map((arrayElement) => {
                return <p key={`${pokemon.name + arrayElement.type.name}`}>{arrayElement.type.name}</p>
            })}
        </div>
    )
}

export default PokeCard