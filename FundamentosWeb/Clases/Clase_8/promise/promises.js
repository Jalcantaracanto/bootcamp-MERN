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
//             console.log(error)
//         })
// }

// login()


//conectar formulario con la funcion login()

// Pasar funcion de login a ES7 - Async/Await



// document.querySelector('#signup').addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const inputValue = document.querySelector('#myInput').value;
//     myAsyncFunction(inputValue);
// }



// const userMailInput = document.getElementById('userMailInput').value
// const userPasswordInput = document.getElementById('userPasswordInput').value

// const isUserExist = new Promise(
//     async (resolve, reject) => {
//         var userMailInput = await document.getElementById('userMailInput').value
//         var userPasswordInput = await document.getElementById('userPasswordInput').value
//         const userMail = 'javier@gmail.com'
//         const password = '12345'
//         if (userMail == userMailInput && password == userPasswordInput) {
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

// async function login() {
//     try {
//         let response = await isUserExist
//         console.log(response)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// (async () => {

//     await login();
// })();

const form = document.getElementById('signup');

async function login(){
    const usernameInput = document.querySelector('#userMailInput');
    const username = usernameInput.value;
    const userPasswordInput = document.querySelector('#userPasswordInput');
    const userPassword = userPasswordInput.value;

    try {
        const result = await isUserExist(username, userPassword);
        console.log(result); 

    } catch (error) {
        console.error('Error al procesar la promesa:', error);
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