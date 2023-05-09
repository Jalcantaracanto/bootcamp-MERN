import axios from "axios"

// api que trae todos los personajes
export const getCharacters = () => axios.get('https://rickandmortyapi.com/api')



//api que trae un solo personaje