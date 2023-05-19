const { Schema, model} = require("mongoose");

const JokeSchema = new Schema({
	setup: {
        type: String,
        required: [true, 'you must enter the setup'],
        minlength: [10, 'setup must have at least 10 characters']
    }, 
    puchline: {
        type: String,
        required: [true, 'you must enter the puchline'],
        minlength: [3, 'Puchline must have at least 3 characters']
    },
});

const Joke = model("Joke", JokeSchema);

module.exports = Joke;