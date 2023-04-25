import React, { Component } from "react"
import Form from "../Components/Form"
import ProfileView from "../Components/ProfileView"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: "",
            address: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { target } = event
        console.log(target.value)
        this.setState({ [target.name]: target.value })
    }

    render() {
        const { userName, email, address } = this.state
        return (
            <div>
                <h1>Registro</h1>
                <Form userName={userName} email={email} address={address} handleChange={this.handleChange.bind(this)} />
                <ProfileView userName={userName} email={email} address={address} /> {/*States -> Las variables que necesita un componente para ser utilizado */}
            </div>
        )
    }
}

export default Home
