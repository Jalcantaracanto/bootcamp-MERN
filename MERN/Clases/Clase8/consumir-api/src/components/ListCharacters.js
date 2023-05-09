import React, { useState, useEffect } from "react"
import { getCharacters } from "../services/characters-service"

const ListCharacters = () => {
    const [characters, setCharacters] = useState([])

    const getCharactersFromService = async () => {
        try {
            const list = await getCharacters()
            console.log(list.data.characters)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCharactersFromService()
    }, [])

    return (
        <div>
            {
                characters?.map((character, index) => (
                    <div>
                        <h1>{character.name}</h1>
                        <img src={character.image} alt={`Imagen de ${character.name}`}/>
                    </div>
                ))
            }
        </div>
        
    )
}

export default ListCharacters
