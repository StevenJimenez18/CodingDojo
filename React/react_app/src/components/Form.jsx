import React, {useState} from 'react'
import './Form.css'

const Form = props => {
    const [name , setName] = useState({firstName: '', lastName: '', email:"", password:"", confirmpassword:""})

    const firstNameVal = () => {
        if (name.firstName < 1){
            return "First name must have more than one character."
            
        }
    }
    const lastNameVal = () => {
        if (name.lastName < 1){
            return "Last name must have more than one character."
        }
    }

    const emailVal = () =>{

        if (name.email < 1){
            return "Email must have more than one character."
        }
    }
    const passwordVal = () =>{
        if (name.password < 1){
            return "Password must have more than one character."
        }
    }
    const confirmPasswordVal = () => {
        if (name.confirmpassword < 1){
            return "Confirm password must have more than one character."
        }
        if (name.password !== name.confirmpassword){
            return "Password and Confirm Password must match."
        }
    }
    
    return (
        <div className="wrapper">

            <div className="inputbox">
            <label>First Name: </label>
            <input  type="text" value ={name.firstName} onChange={e => setName({...name,firstName: e.target.value })}/>
            </div>
            <h2>{ firstNameVal() }</h2>

            <div className="inputbox">
            <label>Last Name:</label>
            <input type="text" value ={name.lastName} onChange={e => setName({...name,lastName: e.target.value })}/>
            </div>
            <h2>{ lastNameVal() }</h2>
            <div className="inputbox">
            <label>Email:</label>
            <input type="text" value ={name.email} onChange={e => setName({...name,email: e.target.value })}/>
            </div>
            <h2>{ emailVal() }</h2>
            <div className="inputbox">
                <label>Password:</label>
            <input type="password" value ={name.password} onChange={e => setName({...name,password: e.target.value })}/>
            </div>
            <h2>{ passwordVal() }</h2>
            <div className="inputbox">
            <label >Password confirm:</label>
            <input type="password" value ={name.confirmpassword} onChange={e => setName({...name,confirmpassword: e.target.value })}/>
            </div>
            <h2>{ confirmPasswordVal() }</h2>


            <h2> First Name: {name.firstName}</h2>
            <h2> Last Name: {name.lastName}</h2>
            <h2> Email: {name.email} </h2>
            <h2> Password: {name.password}</h2>
            <h2> Confirm Password: {name.confirmpassword}</h2>
            
        </div>
    )
}

export default Form
