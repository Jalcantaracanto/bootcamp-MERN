import React from "react"
import { useParams } from "react-router-dom"

export const Persona = () => {
    const { nombre, apellido } = useParams()
    console.log(`${nombre} ${apellido}`)

    return (
        <div>
            <h1>Página de Persona</h1>
            <p>Hola! {nombre} {apellido}</p>
        </div>
    )
}
