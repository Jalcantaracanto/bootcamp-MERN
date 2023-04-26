import React from "react"
import "./App.css"
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import Main from "./Components/Main.js"
import SubContents from "./Components/SubContents.js"
import Advertisement from "./Components/Advertisement.js"

function App() {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <Main>
                <SubContents />
                <SubContents />
                <SubContents />
                <Advertisement />
            </Main>
        </div>
    )
}

export default App
