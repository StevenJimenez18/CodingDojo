//Logic happens here
const Employees = require("../models/employees.models");


module.exports.findAllEmployees =(req,res) => {
    //returns employees as Json
    Employees.find()
    .then(allEmployees => res.json({Employee: allEmployees}))
    .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.addEmployees = (req, res) => {
    Employees.create(req.body)
        .then(newEmployee => res.json({Employee: newEmployee}))
        .catch(err => res.json({message: "Could not add new employee.", error: err}))

}