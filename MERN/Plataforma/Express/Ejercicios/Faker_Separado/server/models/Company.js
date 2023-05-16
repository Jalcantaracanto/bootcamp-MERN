const CompanyController = require('../controllers/CompanyController')

class Company{
    constructor(){
        this.controller = new CompanyController()
    }
}

module.exports = Company