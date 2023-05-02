import React, { useState } from "react"
import Form from "../Components/Form"
import ProfileView from "../Components/ProfileView"

const Home = () => {
    const [userInfo, setUserInfo] = useState({
        userName: "",
        email: "",
        address: "",
    })

    const handleChange = (event) => {
        const { target } = event
        console.log(target.value)

        setUserInfo({
            ...userInfo,
            [target.name]: target.value,
        })

        return target.name
    }

    return (
        <div>
            <h1>Registro</h1>
            <Form userName={userInfo.userName} email={userInfo.email} address={userInfo.address} />
            <ProfileView userName={userInfo.userName} email={userInfo.email} address={userInfo.address} /> {/*States -> Las variables que necesita un componente para ser utilizado */}
        </div>
    )
}

export default Home
