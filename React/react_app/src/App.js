import React, { useState } from 'react';
// import PersonCard from "./components/PersonCard"
// import Form from "./components/Form"
import BoxGenerator from "./components/BoxGenerator"
import Results from "./components/Results"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  
  
  
  const [ currentColor, setCurrentColor ] = useState([]);

  const changeColor = ( newColor ) => {
    setCurrentColor([ ...currentColor, newColor ]);
  }

  return (
    <div className="container-fluid">
      <div className="body">
        <div className="text-light">
          <BoxGenerator onNewBox={ changeColor }/>
          <Results box={ currentColor }/>
        </div>
      </div>
    </div>
    

  );
  



      // {/* <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      // <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      // <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      // <PersonCard firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"}/> */}

      // {/* <Form firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/> */}
}


export default App;
