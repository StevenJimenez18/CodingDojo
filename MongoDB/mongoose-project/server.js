const express = require('express')
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());


//handles post requests
app.use(express.json(), express.urlencoded({extended: true}));

//connect to config file
require("./server/config/mongoosde.config")

//connect to routes and pass it app
require("./server/routes/employees.routes")(app)


app.listen(port, () => console.log(`Listening on port ${port}`))