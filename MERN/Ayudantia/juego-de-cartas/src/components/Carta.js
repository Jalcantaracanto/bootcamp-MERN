import React from "react"

const Carta = (props) => {
    const { nombre, imagen, puntos } = props
    
    return (
        <div className="divCarta">
            <img src="" alt="" />
            <p>Nombre del Personaje</p>
            <p>Puntos</p>
        </div>
    )
}

export default Carta
