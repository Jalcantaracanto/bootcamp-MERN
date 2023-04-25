// import React, { Component } from "react"

// class Counter extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             clickCount: 0,
//         }
//     }

//     handleClick = () =>
//         this.setState({
//             clickCount: this.state.clickCount + 1,
//         })
//     render() {
//         return (
//             <div>
//                 {this.state.clickCount}
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         )
//     }
// }
import React, { useState } from "react"

const Counter = (props) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            {count}
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Counter
