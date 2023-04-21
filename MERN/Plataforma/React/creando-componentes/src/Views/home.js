import React, { Component } from "react"

class Home extends Component {
    render() {
        const { text } = this.props
        return (
            <div>
                {/* <h1>Hay un boton aquí</h1> */}
                <button>{text}</button>
            </div>
        )
    }
}

export default Home
