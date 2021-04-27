import React from 'react'
import {Link, navigate} from '@reach/router'

const ColorChange = props => {

    const onClickHandler = event =>{
        event.preventDefault();
        navigate('/')
    }
    
    return (
        <div>
            <h3>The Word is: {props.word} </h3>
            <br></br>
            <Link to="/">Go to Home Page</Link>
            <Link to="/1">Go to Number Page</Link>
            <button onClick={onClickHandler}>Go to Home Page</button>
        </div>
    )
}

export default ColorChange