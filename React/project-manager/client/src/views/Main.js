import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ProjectManagerForm from '../components/ProjectManagerForm';
import ProjectList from "../components/ProjectList"

const Main = props => {

    const [projects, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/projects')
            .then(res=>{
                setProjects(res.data);
                setLoaded(true);
            });
    },[])


    return (
        <div>
           <ProjectManagerForm/>
           <hr/>
           {loaded && <ProjectList projects={projects}/>}
        </div>
    )
}

export default Main
