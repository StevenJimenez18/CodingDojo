import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Input = props => {
    const { list, setList} = props
    let task = {
        name: "",
        isComplete: false
    };
    const onChange = e => {
        task = e.target.value
    };
    const onClick = e => {
        setList([...list, task]);
        e.target.value = "";
    }
    return (
        <div className="container w-50">
            <input className="form-control" onChange={onChange} type='text' name='task'/>
            <button className="btn btn-primary btn-block" onClick={onClick}> Add Task</button>
            
        </div>
    )
}

export default Input
