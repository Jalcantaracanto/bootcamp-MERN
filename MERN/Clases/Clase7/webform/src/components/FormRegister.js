import React, { useState } from "react"
import styles from "./FormRegister.scss"

const FormRegister = () => {
    const [userInfo, setUserInfo] = useState({
        userName: "",
        password: "",
        confirmPassword: "",
        picProfile: "",
        descriptionProfile: "",
    })

    const [userInfoError, setUserInfoError] = useState({
        userName: "",
        password: "",
        confirmPassword: "",
        picProfile: "",
        descriptionProfile: "",
    })

    const handleOnChange = (e) => {
        const { target } = e
        const { name, value } = target
        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }

    const validations = {
        userName: userInfo.userName.length < 10,
        password: userInfo.password === userInfo.confirmPassword,
        descriptionProfile: userInfo.descriptionProfile.length > 3 && userInfo.descriptionProfile.length < 100,
    }

    const handleValidations = (e) => {
        const { target } = e
        const { name, value } = target
        if (validations[name]) {
            setUserInfoError({
                ...userInfoError,
                [name]: `Hay un error en el cambio ${name}`
            })
        }else{
            setUserInfoError({
                ...userInfoError,
                [name]: '',
            })
        }
    }

    return (
        <div className={styles["form-container"]}>
            <form>
                <label htmlFor="userName">Nombre de usuario</label>
                <input type="text" value={userInfo.userName} name="userName" onChange={handleOnChange} onBlur={handleValidations}/>
                <label htmlFor="picName">Foto de perfil</label>
                <input type="text" value={userInfo.picProfile} name="picProfile" onChange={handleOnChange} onBlur={handleValidations}/>
                <label htmlFor="picName">Descripcion</label>
                <textarea type="text" value={userInfo.descriptionProfile} name="descriptionProfile" onChange={handleOnChange} onBlur={handleValidations}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" value={userInfo.password} name="password" />
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input type="password" value={userInfo.confirmPassword} name="confirmPassword" onChange={handleOnChange} onBlur={handleValidations}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default FormRegister
