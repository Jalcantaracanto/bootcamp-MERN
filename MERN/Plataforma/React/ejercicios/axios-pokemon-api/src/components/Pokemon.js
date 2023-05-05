import React, { useState } from "react"
import './Pokemon.css'
import axios from 'axios'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const handleClick = async () => {
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
            setPokemon(response.data.results)
            console.log(response)
        }catch(e){
            console.log(e)
        }

    }

    return (
        <div className="container">
            <button onClick={handleClick}>Fetch Pokemon</button>
            <ul>
                {pokemon.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemon
