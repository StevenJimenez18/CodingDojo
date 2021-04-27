import React from 'react'
import axios from 'axios'
import Main from "../views/Main"

const ProjectList = props => {

    return (
        <div>
            {props.projects.map((projects, idx) => {
                return <p key={idx} > {projects.title}, {projects.price}, {projects.description}</p>
            })}
        </div>
    )
}

export default ProjectList
