import React, { useState } from "react"
import TareaFormulario from "./TareaFormulario"
import "../styles/ListaTareas.css"
import Tarea from "./Tarea"

const ListaTarea = () => {
    const [tareas, setTareas] = useState([])

    const agregarTarea = (tareaEntrante) => {
        console.log(tareaEntrante)

        if (tareaEntrante.texto.trim()) {
            tareaEntrante.texto = tareaEntrante.texto.trim() //permite quitar espacios del principio y final
            const tareasActualizadas = [tareaEntrante, ...tareas]
            setTareas(tareasActualizadas)
        }
    }

    const eliminarTarea = (id) => {
        const filtroTareas = tareas.filter((tareas) => tareas.id !== id) //devuelve las tareas, salvo las que tienen el ID a eliminar.
        setTareas(filtroTareas) //Ingresa las tareas del filtro anterior.
    }

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map((tarea) => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {tareas.map((tarea) => (
                    <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} eliminarTarea={eliminarTarea} completarTarea={completarTarea}/>
                ))}
            </div>
        </>
    )
}

export default ListaTarea
