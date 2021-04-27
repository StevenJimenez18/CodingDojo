import React, {Component} from 'react';




class NewApp extends Component{
    render() {
      return (
        <>
        <h1>Hello Dojo!</h1>
        <h3>Things I need to do:</h3>
          <ul>
            <li>Learn React</li>
            <li>Climb Mt.Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
          </ul>
          {this.props.someText}
          {this.props.otherText}
        </>
      );
    }
  }

  export default NewApp;

