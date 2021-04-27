//Importing Express
const express = require("express");

//create app
const app = express();

//port
const port = 8000;


// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users", (req, res) => {
    res.json( users );
});

//First route
app.get("/api", (req,res) => {
    console.log("Hello from the first route");
    res.json({message: "First API call"});
})

//First Post 
app.post("/api/post", (req,res) => {
    console.log(req.body)
    res.json({message: "Hello There"})
})

//Listens for server start and console logs entry
app.listen(port, () => console.log(`Running on port ${port}!!`));

