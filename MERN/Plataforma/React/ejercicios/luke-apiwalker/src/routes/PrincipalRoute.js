import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SearchBar } from "../components/SearchBar"
import { ResultsAPIWalker } from "../components/ResultsAPIWalker"

export const PrincipalRoute = () => {

    const [query, setQuery] = useState({
        id: "",
        category: "",
    })

    const llenarQuery = (myQuery) =>{
        setQuery(myQuery)
    }



    return (
        <BrowserRouter>
            <SearchBar llenarQuery={llenarQuery}/>
            <ResultsAPIWalker query={query}/>
            <Routes>
                {/* <Route path="/" element={''} /> */}
                <Route path="people/:id" element={<ResultsAPIWalker />} />
            </Routes>
        </BrowserRouter>
    )
}
