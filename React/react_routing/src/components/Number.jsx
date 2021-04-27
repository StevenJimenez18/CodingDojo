import React from 'react'
import {Link,navigate} from '@reach/router'
const Number = props => {

    const onClickHandler = event =>{
        event.preventDefault();
        navigate('/')
    }
    
    return (
        <div>
            <h3>The number is: {props.id} </h3>
            <br></br>
            <Link to="/">Go to Home Page</Link>
            <button onClick={onClickHandler}>Go to Home Page</button>
        </div>
    )
}

export default Number
