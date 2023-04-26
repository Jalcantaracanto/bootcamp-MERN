import React from "react"

const Form = (props) => {
    const { inputs, setInputs } = props

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" onChange={onChange} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" onChange={onChange} />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" onChange={onChange} />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" onChange={onChange} />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="text" name="confirmPassword" onChange={onChange} />
        </form>
    )
}

export default Form
