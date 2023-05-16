const express = require("express");
const router = express.Router();
const User = require('../models/User')

router.get('/new',(req, res) =>{
    const user = new User
    res.json(user)
})

module.exports  = router