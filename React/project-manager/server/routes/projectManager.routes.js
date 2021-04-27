const projectManagerController = require('../controllers/projectManager.controllers');

module.exports = app =>{

    //Read All
    app.get('/api/projects', projectManagerController.findAllProjects);
    //Read One
    app.get('/api/projects/:_id', projectManagerController.findOneProject);
    //Create
    app.post('/api/projects/create', projectManagerController.createProject);
    //update
    app.put('/api/projects/update/:_id', projectManagerController.updateProject);
    //Delete
    app.delete('api/projects/delete/:_id', projectManagerController.deleteProject)
}
