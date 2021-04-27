import React from 'react'
import {Link, navigate} from '@reach/router'

const Home = props => {

    const onClickHandler = event =>{
        event.preventDefault();
        navigate('/about')
    }
    
    return (
        <div>
            <h1>Welcome</h1>
            <h2>You are on the Home Page</h2>
            <br></br>
            <Link to="/1">Go to Number Page</Link>
            <Link to="/hello">Go to Word Page</Link>
            <button onClick={onClickHandler}>Go to Number Page</button>
        </div>
    )
}

export default Home
