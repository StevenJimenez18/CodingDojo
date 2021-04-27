//calls mongoose for connection to database
const mongoose = require('mongoose')

//connects to DB
mongoose.connect("mongodb://localhost/employees_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Connection to DB failed"))