import './App.css';
import { Router } from '@reach/router';
import Home from "./components/Home"
import Number from "./components/Number"
import Word from "./components/Word"
import ColorChange from "./components/ColorChange"
import "nes.css/css/nes.min.css";
function App() {




  return (
    <Router>
    <Home path="/"/>
    
      {/* { Word.isNaN ?  <Word path="/:word"/> : 
      <Number path="/:id"/>  } */}

    <Word path="/:hello"/>
    <Number path="/:id"/> 
    <ColorChange path="/hello/:bgColor/:txtColor"/>
    </Router>
  );
}

export default App;
