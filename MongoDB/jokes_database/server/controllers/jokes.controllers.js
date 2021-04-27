const Jokes = require("../models/jokes.models");

//Get ALL the music
module.exports.findAllJokes =(req, res) => {
    Jokes.find()
    .then(allJokes => res.json({jokes: allJokes}))
    .catch(err => res.json({message: "Something went wrong with grabbing all Jokes.", error: err}))
}

//Get One instance of music
module.exports.findOneJoke =(req, res) => {
    Jokes.findOne({_id: req.params._id})
    .then(oneJoke => res.json({jokes: oneJoke}))
    .catch(err => res.json({message: "Something went wrong with grabbing one Joke.", error: err}))
}


//Post a NEW song
module.exports.createJoke =(req, res) => {
    Jokes.create(req.body)
    .then(newJoke => res.json({newJoke: newJoke}))
    .catch(err => res.json({message: "Something went wrong with adding a new joke.", error: err}))
}


//DELETE a song

module.exports.deleteJoke =(req, res) => {
    Jokes.remove({_id: req.params._id})
    .then(res.json({message: "Joke was successfully removed."}))
    .catch(err => res.json({message: "Someting went wrong trying to delete a joke.", error: err}))
}

//UPDATE a song
module.exports.updateJoke = (req, res) => {
    Jokes.updateOne({_id: req.params._id}, {
    $set: {
        joke: req.body.joke,
        punchline: req.body.punchline
    }
    })

    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err => res.status(400).json(err))
    
}