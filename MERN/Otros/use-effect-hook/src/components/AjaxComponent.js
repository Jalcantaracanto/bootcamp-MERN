/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react"

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([])
    const [cargando, setCargando] = useState(true)
    const [errores, setErrores] = useState("")

    const getUsuariosEstaticos = () => {
        setUsuarios([
            { id: 7, email: "michael.lawson@reqres.in", first_name: "Michael", last_name: "Lawson", avatar: "https://reqres.in/img/faces/7-image.jpg" },
            { id: 8, email: "lindsay.ferguson@reqres.in", first_name: "Lindsay", last_name: "Ferguson", avatar: "https://reqres.in/img/faces/8-image.jpg" },
            { id: 9, email: "tobias.funke@reqres.in", first_name: "Tobias", last_name: "Funke", avatar: "https://reqres.in/img/faces/9-image.jpg" },
        ])
    }

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then((respuesta) => respuesta.json())
            .then(
                (resultadoFinal) => {
                    setUsuarios(resultadoFinal.data)
                    console.log(usuarios)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    const getUsuariosAjaxAW = () => {
        setTimeout(async () => {
            try {
                const peticion = await fetch("https://reqres.in/api/users345?page=1")
                const { data } = await peticion.json()
                setUsuarios(data)
                setCargando(false)
                console.log(data)
            } catch (error) {
                setErrores(error.message)
                console.log(errores)
            }
        }, 2000)
    }

    useEffect(() => {
        // getUsuariosEstaticos()
        // getUsuariosAjaxPms()
        getUsuariosAjaxAW()
    }, [])

    if (errores !== "") {
        return <div className="cargando">{errores}</div>
    } else if (cargando === true) {
        return <div className="cargando">cargando datos...</div>
    } else if (cargando === false && errores === "") {
        //Cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol className="usuarios">
                    {usuarios.map((usuario) => {
                        console.log(usuario)
                        return (
                            <li key={usuario.id}>
                                <img src={usuario.avatar} width="40" />
                                &nbsp;
                                {usuario.first_name} {usuario.last_name}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}
