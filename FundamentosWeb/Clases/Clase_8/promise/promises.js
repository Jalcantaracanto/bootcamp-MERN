//promesas están desarrolladas para el manejo de los procesos asíncronos

//ES5
// const userMailInput = document.querySelector('#userMailInput')
// const userPasswordInput = document.querySelector('#userPasswordInput')

// const isUserExist = new Promise(
//     function (resolve, reject) {
//         const userMail = 'javier@gmail.com'
//         const password = '12345'
//         if (userMail == userMailInput.value && password == userPasswordInput.value) {
//             const response = {
//                 message: 'Usuario válido',
//                 userName: 'Javier Alcántara'
//             }
//             resolve(response)
//         } else {
//             const reason = {
//                 message: 'Usuario no válido',
//                 error: 'User doesnt Exist!'
//             }
//             reject(reason)
//         }
//     }
// )

// const login = function () {
//     isUserExist
//         .then(function (response) {
//             console.log(response)
//         })
//         .catch(function (error) {
//             console.log(error.value)
//         })
// }

// login()


//conectar formulario con la funcion login()

// Pasar funcion de login a ES7 - Async/Await

// 1

async function login(event) {
    await event.preventDefault()
    const usernameInput = document.querySelector('#userMailInput');
    const username = usernameInput.value;
    const userPasswordInput = document.querySelector('#userPasswordInput');
    const userPassword = userPasswordInput.value;

    try {
        const result = await isUserExist(username, userPassword);
        console.log(result);
    } catch (error) {
        console.error(error.value);
    }
    return false
}

function isUserExist(username, userPassword) {
    return new Promise((resolve, reject) => {
        const userMail = 'javier@gmail.com'
        const password = '12345'
        if (userMail == username && password == userPassword) {
            const response = {
                message: 'Usuario válido',
                userName: 'Javier Alcántara'
            }
            resolve(response)
        } else {
            const reason = {
                message: 'Usuario no válido',
                error: 'User doesnt Exist!'
            }
            reject(reason)
        }
    })
}



// //2

// const form = document.getElementById('signup')

// form.addEventListener('submit', async (event) => {
//     event.preventDefault()
//     const userMailInput = document.getElementById('userMailInput')
//     const userPasswordInput = document.getElementById('userPasswordInput')
//     const userName = userMailInput.value
//     const userPassword = userPasswordInput.value
//     try {
//         const result = await isUserExist(userName, userPassword)
//         console.log(result)
//         userMailInput = document.innerText = ""
//     } catch (error) {
//         console.error(error.value)
//     }
// })

// function isUserExist(userMailInput, userPasswordInput) {
//     return new Promise((resolve, reject) => {
//         const userMail = 'javier@gmail.com'
//         const userPass = '12345'
//         if (userMail == userMailInput && userPass == userPasswordInput) {
//             const response = {
//                 message: 'Usuario Valido',
//                 UserName: 'Javier Alcántara'
//             }
//             resolve(response)
//         } else {
//             const reason = {
//                 message: 'Usuario Invalido',
//                 error: 'Usuario no Existe'
//             }
//             reject(reason)
//         }
//     })
// }


//3

// const isUserExist = (userMailInput, userPasswordInput) => {
//     return new Promise(function (resolve, reject) {
//         const userMail = 'javier@gmail.com'
//         const userPass = '12345'
//         if (userMail == userMailInput && userPass == userPasswordInput) {
//             const response = {
//                 message: 'Usuario Valido',
//                 UserName: 'Javier Alcántara'
//             }
//             resolve(response)
//         } else {
//             const reason = {
//                 message: 'Usuario Invalido',
//                 error: 'Usuario no Existe'
//             }
//             reject(reason)
//         }
//     })
// }


// async function login(event) {
//     event.preventDefault()
//     const usernameInput = document.querySelector('#userMailInput')
//     const username = usernameInput.value
//     const userPasswordInput = document.querySelector('#userPasswordInput')
//     const userPassword = userPasswordInput.value

//     try {
//         const result = await isUserExist(username, userPassword)
//         console.log(result)
//     } catch (error) {
//         console.error(error.value)
//     }
//     return false
// }