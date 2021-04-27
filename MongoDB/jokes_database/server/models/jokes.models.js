const mongoose = require("mongoose");


const JokesSchema = new mongoose.Schema({
    joke: {
        type: String
    },
    punchline: {
        type: String
    }
}, {timestamps: true})

const Jokes = mongoose.model("Jokes", JokesSchema)

module.exports = Jokes