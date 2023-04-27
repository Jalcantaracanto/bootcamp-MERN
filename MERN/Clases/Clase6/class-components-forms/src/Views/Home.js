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

        switch (target.name) {
            case "userName":
                event.target.value > 0 && event.target.value.length < 2 ? setUserInfo ("Usuario debe tener al menos 2 Caracteres") : setUserInfo("")
                break

            case "email":
                break

            case "address":
                break

            default:
                break
        }

        setUserInfo({
            ...userInfo,
            [target.name]: target.value,
        })

        return target.name
    }

    return (
        <div>
            <h1>Registro</h1>
            <Form userName={userInfo.userName} email={userInfo.email} address={userInfo.address} handleChange={handleChange} />
            <ProfileView userName={userInfo.userName} email={userInfo.email} address={userInfo.address} /> {/*States -> Las variables que necesita un componente para ser utilizado */}
        </div>
    )
}

export default Home
