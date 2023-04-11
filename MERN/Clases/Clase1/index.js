// Desestructuración

const student = {
    fullName: 'Javier Acántara',
    age: 30,
    stack: 'MERN'
}

const { fullName } = student

const props = {
    city: 'Valdivia',
    country: 'Chile',
    street: 'km7'
}

const { city, country, street } = props

console.log('city: ', city)

console.log(`Mi nombre es ${student.fullName}`)


const students = ['Gaby', 'Javier', 'Fernanda', 'Valentina']
const [first, second] = students

console.log('First: ', first)

const nreStudentsList= [...students, 'Gianni']



//operador terniario

const firstName = 'Javier'

const lastName = firstName !== '' ? 'Alcántara' : ''
