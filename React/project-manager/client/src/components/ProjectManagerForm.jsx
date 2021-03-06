import React, {useState} from 'react'
import axios from 'axios'

const ProjectManagerForm = props => {

const [title, setTitle] = useState(""); 
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");


//handler when the form is submitted
const onSubmitHandler = e => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios.post('http://localhost:8000/api/projects/create', {
        title,
        price,
        description
    })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}

return (
    <>
    <h1> Project Manager </h1>
    <form className="form-control" onSubmit={onSubmitHandler}>
        <p>
            <label>Title</label><br/>
            <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
        </p>
        <p>
            <label>Price</label><br/>
            <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
        </p>
        <p>
            <label>Description</label><br/>
            <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
        </p>
        <input type="submit"/>
    </form>
    </>
)
}
export default ProjectManagerForm
