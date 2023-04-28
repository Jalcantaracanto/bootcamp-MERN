import React, { useState } from "react"
import styles from "./components.module.css"

const AddColor = (props) => {
    const [color, setColor] = useState("")
    const [maxMin, setMaxMin] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.insertColor(color,maxMin)
        setColor("")
        setMaxMin("")
    }

    return (
        <form onSubmit={handleSubmit} className={styles.webForm}>
            <p>Color</p>
            <input type="text" name="color" onChange={(e) => setColor(e.target.value)} value={color} />
            <p>Tamaño PX</p>
            <input type="text" name="maxMin" onChange={(e) => setMaxMin(e.target.value)} value={maxMin} />
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddColor
