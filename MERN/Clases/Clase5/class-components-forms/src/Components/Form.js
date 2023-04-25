import React, { Component } from 'react'

class Form extends Component {

    render(){
        const {userName, email, address, handleChange } = this.props

        return(
            <form action="">
                <label htmlFor="userName">Ingresa Usuario</label>
                <input type="text" placeholder='Ej. Javier Alcántara' name='userName' value={userName} onChange={handleChange}/>
                <label htmlFor="email">Ingresa Correo</label>
                <input type="email" placeholder='Ej. correo@gmail.com' name='email' value={email} onChange={handleChange}/>
                <label htmlFor="address">Dirección</label>
                <textarea name="address" id="" cols="30" rows="10" placeholder='Ej. Av Pacifico 4401 Torre E depto. 903' value={address} onChange={handleChange}></textarea>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default Form