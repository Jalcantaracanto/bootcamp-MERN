const express = require("express")
const { faker } = require("@faker-js/faker")
const port = 8080;

const app = express()

class Usuario {
    constructor() {
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Empresa {
    constructor() {
        this.id = faker.datatype.uuid()
        this.Name = faker.company.name()
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}

console.log(new Usuario())
console.log(new Empresa())



app.get("/api/users/new", (req, res) => {
    res.json(new Usuario());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Empresa());
});

app.get("/api/user/company", (req, res) => {
    res.json(new Usuario());
    res.json(new Empresa());
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

// const createUser = () =>{
//     const user = {
//         _id: faker.datatype._id(),
//         firstName: faker.internet.firstName(),
//         lastName: faker.internet.lastName(),
//         phoneNumber: faker.internet.phoneNumber(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     }
//     return user
// }

// const createCompany = () =>{
//     const user = {
//         _id: faker.datatype._id(),
//         Name: faker.internet.Name(),
//         address: {
//             street: faker.address.street(),
//             city: faker.address.city(),
//             state: faker.address.state(),
//             zipCode: faker.address.zipCode(),
//             country: faker.address.country()
//         }
//     }
//     return user
// }

// console.log(createUser())
// console.log(createCompany())
