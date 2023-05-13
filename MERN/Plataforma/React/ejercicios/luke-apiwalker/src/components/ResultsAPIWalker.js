import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export const ResultsAPIWalker = ({query}) => {
    const [data, setData] = useState([])
    const { category, id } = useParams()
    const [error, setError] = useState(false)

    const getStarWarsApi = () => {
        axios
            .get(`https://swapi.dev/api/${query.category}/${query.id}`)
            .then((response) => {
                console.log(response.data)
                setData(response.data)
                setError(false)
            })
            .catch(() => {
                setError(true)
            })
    }
    console.log(data)
    
    useEffect(() => {
        if(query.category !== ''){
            getStarWarsApi()
        }
    }, [query])

    const resultWeb = () => {
        switch (query.category) {
            case "people":
                return (
                    <div className="results-content">
                        <h2>{data.name}</h2>
                        <ul>
                            <li>Height: {data.height}</li>
                            <li>Hair Color: {data.hair_color}</li>
                            <li>Eye Color: {data.eye_color}</li>
                            <li>Birth Year: {data.birth_year}</li>
                        </ul>
                    </div>
                )

            case "films":
                return (
                    <div className="results-content">
                        <h2>{data.title}</h2>
                        <ul>
                            <li>Episode: {data.episode_id}</li>
                            <li>Director: {data.director}</li>
                            <li>Producer: {data.producer}</li>
                            <li>Release Date: {data.release_date}</li>
                        </ul>
                    </div>
                )

            case "starships":
                return (
                    <div className="results-content">
                        <h2>{data.name}</h2>
                        <ul>
                            <li>Class: {data.starship_class}</li>
                            <li>Manufacturer: {data.manufacturer}</li>
                            <li>Hyperdrive Rating: {data.hyperdrive_rating}</li>
                            <li>Cost in credits: {data.cost_in_credits}</li>
                        </ul>
                    </div>
                )

            case "vehicles":
                return (
                    <div className="results-content">
                        <h2>{data.name}</h2>
                        <ul>
                            <li>Model: {data.model}</li>
                            <li>Manufacturer: {data.manufacturer}</li>
                            <li>Max Atmospheric Speed: {data.max_atmosphering_speed}</li>
                            <li>Cost in credits: {data.cost_in_credits}</li>
                        </ul>
                    </div>
                )

            case "species":
                return (
                    <div className="results-content">
                        <h2>{data.name}</h2>
                        <ul>
                            <li>Classification: {data.classification}</li>
                            <li>Designation: {data.designation}</li>
                            <li>Language: {data.language}</li>
                            <li>Average Lifespan: {data.average_lifespan}</li>
                        </ul>
                    </div>
                )

            case "planets":
                return (
                    <div className="results-content">
                        <h2>{data.name}</h2>
                        <ul>
                            <li>Climate: {data.climate}</li>
                            <li>Population: {data.population}</li>
                            <li>Terrain: {data.terrain}</li>
                            <li>Gravity: {data.gravity}</li>
                        </ul>
                    </div>
                )
            default:
                break
        }
    }

    return (
        <>
            {error ? (
                <div>
                    <p>Estos no son los droides que está buscando</p>
                    <img src="https://www.digitalmomblog.com/wp-content/uploads/2022/05/obi-wan-judging-you-meme.jpeg" alt="Obi wan error" />
                </div>
            ) : (
                resultWeb()
            )}
        </>
    )
}
