const { faker } = require("@faker-js/faker")

class Empresa {
    constructor() {
        this.id = faker.string.uuid()
        this.Name = faker.company.name()
        this.address = {
            street: faker.location.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}

module.exports = Empresa