const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/projectmanager_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connected to project manager Database."))
    .catch(err => console.log("Error connecting to Database.", err))