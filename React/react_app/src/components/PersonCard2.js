//class example


import React, {Component} from 'react';

class PersonCard extends Component{

    constructor(props){
        super(props)
        this.state ={
            age : props.age
        }
    
    }
        addAge(){
            this.setState((props) =>({
                age : props.age + 1
            }))
        }
    
    render(){
        var {firstName, lastName, hairColor} = this.props;
        return(
            <div>
                <h3>{lastName}, {firstName}</h3>
                <p> Age: {this.state.age}</p>
                <p> Hair Color: {hairColor} </p>
                <button onClick={ ()=> this.addAge()  }>Click Me</button>
                <br></br>
            </div>
        );
    }
}

export default PersonCard