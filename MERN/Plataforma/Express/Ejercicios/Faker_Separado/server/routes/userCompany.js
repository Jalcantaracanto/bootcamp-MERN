const express = require("express")
const router = express.Router()
const User = require("../models/User")
const Company = require("../models/Company")

router.get("/", (req, res) => {
    const user = new User()
    const company = new Company()
    res.json({
        user: user,
        company: company,
    })
})

module.exports = router
