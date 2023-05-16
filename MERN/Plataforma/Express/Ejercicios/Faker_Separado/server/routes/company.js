const express = require("express");
const router = express.Router();
const Company = require('../models/Company')

router.get('/new',(req, res) =>{
    const company = new Company
    res.json(company)
})

module.exports  = router