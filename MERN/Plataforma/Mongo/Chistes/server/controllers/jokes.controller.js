const Jokes = require("../models/jokes.models")

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then((allDaJokes) => res.json({ jokes: allDaJokes }))
        .catch((err) => res.json({ message: "I don't know could find all the jokes", error: err }))
}

module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "The joke was not found", error: err }))
}

module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newCreateJoke => res.json({ joke: newCreateJoke }))
        .catch((err) => res.json({ message: "Error creating joke", error: err }))
}

module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updateJoke) => res.json({ joke: updateJoke }))
        .catch((err) => res.json({ message: "Error updating joke", error: err }))
}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then((deleteJoke) => res.json({ joke: deleteJoke }))
        .catch((err) => res.json({ message: "Error deleting joke", error: err }))
}
