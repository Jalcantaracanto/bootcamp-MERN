import React, { useState } from "react"
import PropTypes from "prop-types"

export const EjercicioComponent = ({ year }) => {
    const [yearNow, setYearNow] = useState(year)

    const siguiente = (e) => {
        setYearNow(yearNow + 1)
    }

    const anterior = (e) => {
        setYearNow(yearNow - 1)
    }

    const cambiarYear = e =>{
        let valor = parseFloat(e.target.value)
        
        Number.isInteger(valor) ? setYearNow(valor) : setYearNow(year)
        
    }

    return (
        <div>
            <h2>Ejercicio con useState</h2>
            <strong className="label">{yearNow}</strong>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={anterior}>Anterior</button>
            <input type="text" name="" onChange={cambiarYear} placeholder="Cambia el año" />
        </div>
    )
}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired,
}
