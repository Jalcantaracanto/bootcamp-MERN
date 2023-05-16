const express = require("express");
const app = express()
const port = 8080

const routes = require('./server/routes')

app.use(routes)

app.listen(port, () => console.log('We are running our first server'))