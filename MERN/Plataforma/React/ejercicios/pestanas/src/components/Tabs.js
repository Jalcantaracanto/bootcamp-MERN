import React, { useState } from "react"
import Boton from "./Boton"

const Tabs = () => {
    const [tab, setTab] = useState(["Tab1", "Tab2", "Tab3"])

    return (
        <>
            {tab.map((texto, index) => (
                <Boton texto={texto} key={index} id={index}/>
            ))}
        </>
    )
}

export default Tabs
