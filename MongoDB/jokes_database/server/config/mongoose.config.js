//Sets up config for mongoose

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("Connected to db"))
.catch(err => console.log("error connecting to database", err))