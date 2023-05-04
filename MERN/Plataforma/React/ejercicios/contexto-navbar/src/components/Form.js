import React, { useState, createContext } from "react"

export const textName = createContext()

const Form = () => {
    const [name, setName] = useState("")

    const handleChange = (e) => {
        const { target } = e
        setName(target.value)

        return setName(target.value)
    }

    return (
        <>
            <label htmlFor="name">Your Name: </label>
            <input type="text" name="name" value={name} placeholder="Enter your Name" onChange={handleChange} />
        </>
    )
}

export default Form
