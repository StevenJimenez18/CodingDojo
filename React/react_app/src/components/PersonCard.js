import React, {useState} from 'react';


function PersonCard(props){

    const[count,setCount] = useState(props.age)
    
    function addAge(){
        setCount(prevCount => prevCount + 1)
    }
    
    return(
            <div>
                <h3>{props.lastName}, {props.firstName}</h3>
                <p> Age: {count}</p>
                <p> Hair Color: {props.hairColor} </p>
                <button onClick={addAge}>Click Me</button>
                <br></br>
            </div>
    )
}
        


export default PersonCard