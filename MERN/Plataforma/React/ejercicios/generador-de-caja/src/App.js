import React, { useState } from "react"
import AddColor from "./components/AddColor"
import BoxColor from "./components/BoxColor"
import styles from "./components/components.module.css"
import "./App.css"

function App() {
    const [divs, setDivs] = useState([])

    const insertColor = (color, maxMin) => {
        const newDiv = <div className={styles.boxColor} style={{ backgroundColor: color, height: parseFloat(maxMin), width: parseFloat(maxMin)}}></div>
        setDivs([...divs, newDiv])
    }

    return (
        <div>
            <AddColor insertColor={insertColor}/>
            <BoxColor divs={divs} />
        </div>
    )
}

export default App
