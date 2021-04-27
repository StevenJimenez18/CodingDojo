import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Task = props => {

    const {task, index, list, setList } = props
    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    };

    const onChange = e =>{
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return (
        <div className="container bg-secondary">
            <h4> {task.name}</h4>
            <div className="container">
            <lable htmlFor="checkbox">Completed?</lable>
            <input onChange={onChange} type="checkbox"  checked={task.isComplete}/>
            <button className="btn btn-sm btn-danger" onClick={onClick}>X</button>
            </div>
        </div>
    );
};

export default Task
