import React, { Component } from "react"

class PersonCard extends Component {
    render(){
        // const card = ({firstName, lastName, age, hairColor}) => {
        //     return(
        //         <div>
        //             <h1>{firstName}, {lastName}</h1>
        //             <p>Age: {age}</p>
        //             <p>Hair Color: {hairColor}</p>
        //         </div>
        //     )
        // }
        const {firstName} = this.props
        const {lastName} = this.props
        const {age} = this.props
        const {hairColor} = this.props
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}

export default PersonCard