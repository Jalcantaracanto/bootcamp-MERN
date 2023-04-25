import React, { Component } from "react"

class IncreaseAge extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.increaseAge}>aumentar edad</button>
            </div>
        )
    }
}

export default IncreaseAge
