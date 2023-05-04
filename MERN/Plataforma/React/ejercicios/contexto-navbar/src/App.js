import React from "react"
import "./App.css"
import FormWrapper from "./components/FormWrapper"
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"

function App() {
    return (
        <div className="App">
            {/* <Wrapper> */}
                <Navbar />
                <FormWrapper />
            {/* </Wrapper> */}
        </div>
    )
}

export default App
