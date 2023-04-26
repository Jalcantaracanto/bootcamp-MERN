import React, { useState } from "react"

const Form = (props) => {
    const { inputs, setInputs } = props
    const [firstNameValidator, setfirstNameValidator] = useState("")
    const [lastNameValidator, setLastNameValidator] = useState("")
    const [emailValidator, setEmailValidator] = useState("")
    const [passwordValidator, setpasswordValidator] = useState("")
    const [passwordMath, setpasswordMath] = useState("")

    const onChange = (e) => {
        switch (e.target.name) {
            case "firstName":
                e.target.value.length > 0 && e.target.value.length < 2 ? setfirstNameValidator("First name must be at least 2 characters long") : setfirstNameValidator("")
                break

            case "lastName":
                e.target.value.length > 0 && e.target.value.length < 2 ? setLastNameValidator("Last name must be at least 2 character long") : setLastNameValidator("")
                break

            case "email":
                e.target.value.length > 0 && e.target.value.length < 5 ? setEmailValidator("Email must be at least 5 character long") : setEmailValidator("")
                break

            case "password":
                e.target.value.length > 0 && e.target.value.length < 8 ? setpasswordValidator("Password must be at least 8 character long") : setpasswordValidator("")
                e.target.value !== inputs.confirmPassword ? setpasswordMath("Passwords must match") : setpasswordMath("")
                break

            default:
                break
        }

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" onChange={onChange} />
            <p style={{ color: "red" }}>{firstNameValidator}</p>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" onChange={onChange} />
            <p style={{ color: "red" }}>{lastNameValidator}</p>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" onChange={onChange} />
            <p style={{ color: "red" }}>{emailValidator}</p>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" onChange={onChange} />
            <p style={{ color: "red" }}>{passwordValidator}</p>
            <p style={{ color: "red" }}>{passwordMath}</p>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="text" name="confirmPassword" onChange={onChange} />
            <div>
                <input type="submit" value="Ingresar" />
            </div>
        </form>
    )
}

export default Form
