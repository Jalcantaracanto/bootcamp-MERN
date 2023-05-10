import React, { useState, useEffect } from "react"
import { AvisoComponent } from "./AvisoComponent"

export const PruebasComponent = () => {
    const [usuario, setUsuario] = useState("Javier Alcántara")
    const [fecha, setFecha] = useState("01-01-1998")
    const [contador, setContador] = useState(0)

    const modUsuario = (e) => {
        setUsuario(e.target.value)
    }

    const cambiarFlecha = (e) => {
        setFecha(Date.now)
    }

    //useEffect se ejecuta cuando pasa algo (algo que uno le indica) -> si tiene [] solo se carga una vez al cargar el componente
    useEffect(() => {
        console.log("Has cargado el componente")
    }, [])

    //Esto solo se ejectura si cambia el usuario
    useEffect(() => {
        setContador(contador + 1)
        console.log(`Has modificado el usuario ${contador}`)
    }, [usuario])

    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>
            <div>
                <strong className={"label"}>{usuario}</strong>
                <input type="text" onChange={modUsuario} placeholder="Cambia el Nombre" />
            </div>
            <div>
                <strong>{fecha}</strong>
                <button onClick={cambiarFlecha}>Cambiar Flecha</button>
            </div>

            {  usuario === "Javier" && <AvisoComponent/> }
        </div>
    )
}
