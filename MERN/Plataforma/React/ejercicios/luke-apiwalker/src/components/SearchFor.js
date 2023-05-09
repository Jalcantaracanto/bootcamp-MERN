import React, { useEffect ,useState } from "react"
import  axios  from "axios"

const SearchFor = () => {
    const [starWars, setStarWars] = useState([])

    copuseEffect = async () => {
        try {
            const response = await axios.get("https://swapi.dev/api/films/1/")
            setStarWars(response.data.results)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="container">
        </div>
    )


}

export default SearchFor
