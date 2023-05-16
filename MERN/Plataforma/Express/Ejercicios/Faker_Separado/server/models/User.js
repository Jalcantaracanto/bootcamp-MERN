const UserController = require("../controllers/userController")

class User {
    constructor() {
        this.controller = new UserController()
    }
}

module.exports = User
