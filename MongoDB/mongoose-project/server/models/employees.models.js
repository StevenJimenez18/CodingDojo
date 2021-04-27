const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeesSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName: {
        type: String
    }
})

const Employees = mongoose.model("Employees", EmployeesSchema);

module.exports = Employees