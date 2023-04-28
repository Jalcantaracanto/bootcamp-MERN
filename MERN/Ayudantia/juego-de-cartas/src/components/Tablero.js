import React from "react"
import Carta from "./Carta"

const Tablero = () => {
    return (
        <div className="divTablero">
            <div>
                <h2>Tablero de Cartas</h2>
            </div>
            <div>
                <Carta nombre={'Carol'} imagen="url" puntos="50"/>
                <Carta nombre={'Javier'} imagen="url" puntos="50"/>
                <Carta nombre={'Sergio'} imagen="url" puntos="50"/>
            </div>
        </div>
    )
}

export default Tablero
