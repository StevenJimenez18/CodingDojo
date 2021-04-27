const JokesController = require("../controllers/jokes.controllers")

module.exports = app => {
    //GET ALL
    app.get("/api/jokes", JokesController.findAllJokes)
    //GET ONE
    app.get("/api/jokes/:_id", JokesController.findOneJoke)
    // ADD NEW
    app.post("/api/jokes/new", JokesController.createJoke)
    //Delete ONE song
    app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke)
    app.put("/api/jokes/update/:_id", JokesController.updateJoke)
}