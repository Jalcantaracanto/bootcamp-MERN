const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/Chistes", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Estableció una conexión con la base de datos"))
	.catch(err => console.log("Algo salió mal al conectarse a la base de datos", err));