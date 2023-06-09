import React from "react"
import "../styles/Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto" >{texto}</div>
            <input type="checkbox" name="" id="" onClick={() => completarTarea(id)}/>
            <div className="tarea-contenedor-iconos" onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className="tarea-icono" />
            </div>
        </div>
    )
}

export default Tarea
