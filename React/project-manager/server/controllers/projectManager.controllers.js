const ProjectManager = require('../models/projectManager.models')

//All
module.exports.findAllProjects = (req, res) => {
    ProjectManager.find()
    .then(allProjects => res.json({allProjects : allProjects}))
    .catch(err => res.json({message: "Something went wrong finding all projects", error: err}))
}

//One
module.exports.findOneProject = (req, res) => {
    ProjectManager.findOne({_id: req.params._id})
        .then(oneProject => res.json({oneProject: oneProject}))
        .catch(err => res.json({message: "Something went wrong finding one project.", error: err}))
}

//Create
module.exports.createProject = (req, res) => {
    ProjectManager.create(req.body)
        .then(newProject => res.json({newProject: newProject}))
        .catch(err => res.json({message: "Something went wrong when adding a project to the database!", error: err}))
}

//Delete
module.exports.deleteProject = (req, res) => {
    ProjectManager.remove({_id: req.params._id})
        .then(res.json({message: "A project was successfully removed."}))
        .catch(err => res.json({message: "Something went wrong trying to delete a song!", error: err}))
}

//Update
module.exports.updateProject = (req, res) => {
    ProjectManager.updateOne({_id: req.params._id}, {
        $set: {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
        }
    }, {runValidators: true})
        .then(oneProject => res.json({oneProject: oneProject}))
        .catch(err => res.json({message: "Something went wrong trying to update a song!", error: err}))
}