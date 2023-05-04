import React, { useState } from "react"
import { textNombre } from "./Form/textNombre"

const Navbar = () => {
    const [name, setName] = useState("Usuario")

    return (
        <textNombre.Provider value={{ name, setName }}>
            <nav>
                <h1>Hi, {name}!</h1>
            </nav>
        </textNombre.Provider>
    )
}

export default Navbar
