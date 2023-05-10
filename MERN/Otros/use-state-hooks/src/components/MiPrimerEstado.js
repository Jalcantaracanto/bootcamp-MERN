import React, { useState } from "react"

export const MiPrimerEstado = () => {
    // let nombre = "Javier Alcántara"

    // const cambiarNombre = (e) => {
    //     nombre = "Nicole Chavez"
    // }

    const [nombre, setNombre] = useState("Javier Alcántara")

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
    }

    return (
        <div>
            <h3>Mi primer estado</h3>
            <strong>{nombre}</strong>
            <div>
                <button onClick={(e) => cambiarNombre(e, "Nicole Chavez")}>Cambiar Nombre</button>
                <input type="text" name="" onKeyUp={(e) => cambiarNombre(e, e.target.value)} placeholder="Cambia el Nombre" />
            </div>
        </div>
    )
}
