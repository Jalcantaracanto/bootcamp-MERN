import React, { useState } from "react"
import Contenido from "./Contenido"

const Boton = ({ texto, id }) => {
    const [content, setContent] = useState(["content 1", "content 2", "content 3"])
    const filtro = content.filter((content, index) => index === id)

    const onClickHandler  = (e, value) => {
        console.log(value)
        return <>{filtro}</>
    }

    return (
        <>
            <button onClick={onClickHandler }>{texto}</button>
        </>
    )
}
export default Boton
