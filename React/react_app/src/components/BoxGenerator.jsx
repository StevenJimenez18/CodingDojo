import React, {useState} from 'react'



const BoxGenerator = props => {
    
    const [ Color, setCurrentColor ] = useState("");
    const [ Height, setCurrentHeight ] = useState("");
    const handleSubmit = (e) => { 
        e.preventDefault();

        const newBox = { color: Color, height: Height };

        props.onNewBox( newBox );
        setCurrentColor("");
        setCurrentHeight("");
    };
    
    return (

    <form className="jumbotron col-8" onSubmit={ handleSubmit }>
    <h1 className="welcome">Generate a box</h1>
    <div className="input">
        <input 
            className="form-control col-6"
            type="text"
            placeholder= "Enter a color here"
            name="color"
            onChange = { (e) => setCurrentColor(e.target.value) }
            value={ Color }
        ></input>

        <input 
            className="form-control col-6"
            type="number"
            placeholder="Box size will generate in PX"
            name="height"
            onChange = { (e) => setCurrentHeight(e.target.value) }
            value={ Height }
        ></input>

        <input type="submit" className="btn btn-success" value="ADD"/>
    </div>
</form>
);
}

export default BoxGenerator;
