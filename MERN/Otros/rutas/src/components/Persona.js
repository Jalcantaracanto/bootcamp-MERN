import React from "react"
import { useNavigate, useParams } from "react-router-dom"

export const Persona = () => {
    //valores por defecto en parametros opcionales
    // let { nombre = 'Javier', apellido = 'Alcántara' } = useParams()
    // console.log(`${nombre} ${apellido}`)

    const { nombre, apellido } = useParams()
    const navegar = useNavigate()

    const enviar = (e) => {
        e.preventDefault()
        let nombre = e.target.nombre.value
        let apellido = e.target.apellido.value
        let url = `/persona/${nombre}/${apellido}`

        // nombre.length <= 0 && apellido.length <= 0 ? navegar("/inicio") : navegar(url)

        if(nombre.length <= 0 && apellido.length <= 0){
            navegar("/inicio")
        }else if(nombre === "contacto"){
            navegar("/contacto")
        }else{
            navegar(url)
        }

        e.target.nombre.value = ""
        e.target.apellido.value = ""
    }

    return (
        <div>
            {!nombre ? (
                <h1> No hay ninguna persona que mostrar</h1>
            ) : (
                <h1>
                    Página de Persona: {nombre} {apellido}
                </h1>
            )}
            <p>Está es la página de persona</p>

            <form onSubmit={enviar}>
                <input type="text" name="nombre" />
                <input type="text" name="apellido" />
                <input type="submit" name="enviar" value="enviar" />
            </form>
        </div>
    )
}
