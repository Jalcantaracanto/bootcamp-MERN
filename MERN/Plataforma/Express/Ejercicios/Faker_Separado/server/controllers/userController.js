const { faker } = require("@faker-js/faker")

class Usuario {
    constructor() {
        this.id = faker.string.uuid()
        this.firstName = faker.person.firstName()
        this.lastName = faker.person.lastName()
        this.phoneNumber = faker.phone.number()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

module.exports = Usuario
