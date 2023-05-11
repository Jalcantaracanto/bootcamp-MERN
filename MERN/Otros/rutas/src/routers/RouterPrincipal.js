import React from "react"
import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom"
import { Inicio } from "../components/Inicio"
import { Articulo } from "../components/Articulo"
import { Contacto } from "../components/Contacto"
import { Error } from "../components/Error"
import { Persona } from "../components/Persona"

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <h1>Cabecera</h1>
            <hr />

            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/inicio"
                            className={
                                ({ isActive }) => (isActive ? "activado" : "")
                                // Los navLink traen por defecto un objeto que se puede ver con una funcion de callback
                                // (datosNavegacion) =>{
                                //     console.log(datosNavegacion)
                                //}
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/articulo" className={({ isActive }) => (isActive ? "activado" : "")}>
                            Articulo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => (isActive ? "activado" : "")}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
            {/* Cargar Componentes*/}
            {/* Aquí se Carga el componente que coincide con el path */}

            <section className="contenido-principal">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/articulo" element={<Articulo />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/persona/:nombre" element={<Persona />} />
                    <Route path="/persona/:nombre/:apellido" element={<Persona />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </section>
            <hr />
            <footer>
                <h3>Pie de Página</h3>
            </footer>
        </BrowserRouter>
    )
}
