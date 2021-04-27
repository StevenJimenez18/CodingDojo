const EmployeesController = require("../controllers/employees.controller")


module.exports = app => {
    //this routes gets the employees
    app.get("/api/employees", EmployeesController.findAllEmployees)
    app.post("/api/employees/new", EmployeesController.addEmployees)
}