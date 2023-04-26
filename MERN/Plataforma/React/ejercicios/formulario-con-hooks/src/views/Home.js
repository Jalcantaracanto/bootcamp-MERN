import React, { useState } from "react"
import Form from "../components/Form"
// import Results from "../components/Results"

const Home = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    return (
        <div className="main-container">
            <Form inputs={state} setInputs={setState} />
            {/* <Results firstName={state.firstName} lastName={state.lastName} email={state.email} password={state.password} confirmPassword={state.confirmPassword} /> */}
        </div>
    )
}

export default Home
