import React, { useState } from "react"
import './Pokemon.css'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const handleClick = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const pokemones = await response.json()
        setPokemon(pokemones.results)
        console.log(pokemones)
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
