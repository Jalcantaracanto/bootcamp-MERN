import React, { useState } from "react"

export const Formulario = () => {
    const [usuario, setUsuario] = useState({})

    const conseguirDatosFormulario = (e) => {
        e.preventDefault()
        let datos = e.target

        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value
        }

        console.log(usuario)
        setUsuario(usuario)
    }

    const cambiarDatos = (e) => {
        let name_del_input = e.target.name

        setUsuario((estado_previo) => {
            return {
                ...estado_previo,
                [name_del_input]: e.target.value,
            }
        })
    }

    return (
        <div>
            <h1>Formulario</h1>
            {usuario.enviar && (
                <div className="info_usuario label">
                    {usuario.nombre} {usuario.apellido} es un {usuario.genero}y su biografia es {usuario.bio}
                </div>
            )}

            <form onSubmit={conseguirDatosFormulario}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={cambiarDatos} />
                <input type="text" name="apellido" placeholder="Apellido" onChange={cambiarDatos} />
                <select name="genero" onChange={cambiarDatos}>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name="bio" cols="30" rows="10" placeholder="Biografia" onChange={cambiarDatos}></textarea>
                <input type="submit" value="Enviar " name="enviar" />
            </form>
        </div>
    )
}
