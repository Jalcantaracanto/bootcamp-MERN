
const isUserExist = (userEmail, userPassword) => {
    return new Promise((resolve, reject) => {
        const email = 'javier@gmail.com'
        const password = '12345'
        if (email == userEmail && password == userPassword) {
            const response = {
                message: 'Usuario Valido',
                userName: 'Javier Alcántara'
            }
            resolve(response)
        } else {
            const reason = {
                message: 'Usuario Invalido',
                userName: 'Intente Nuevamente'
            }
            reject(reason)
        }
    })
}

const login = async (event) => {
    event.preventDefault()
    const userEmail = document.querySelector('#userMailInput')
    const userPassword = document.querySelector('#userPasswordInput')
    const mail = userEmail.value
    const pass = userPassword.value
    try {
        const result = await isUserExist(mail, pass)
        console.log(result)
    } catch (error) {
        console.log(error)
    }

    return false
}