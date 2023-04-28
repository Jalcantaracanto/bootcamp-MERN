import React from "react"

const Carta = (props) => {
    const { nombre, imagen, puntos } = props

    return (
        <div className="divCarta">
            <img src={imagen} alt="" />
            <p>{nombre}</p>
            <p>{puntos}</p>
        </div>
    )
}

export default Carta
