import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SearchBar = ({llenarQuery}) => {
    const [id, setId] = useState("")
    const [category, setCategory ] = useState("people")
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
        // console.log(e)
        // navigate(`/${category}/${id}`)
        llenarQuery({
            id:id,
            category:category
        })
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search For: </label>
                <select onChange={e => setCategory(e.target.value)}>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <input type="text" onChange={e => setId(e.target.value)}/>
                <input type="submit" value="Buscar" />
            </form>
        </div>
    )
}
