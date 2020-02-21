import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './Person/userInput';
import UserOutput from './Person/userOutput';


class App extends Component {
  state={
    text:''
  }

  switchNameHandler = (event) => {
      const text=event.target.value;
      this.setState({
        text:text
      });      
  }

  changeNameHandler= event=>{
    this.setState({
      Person:[
      {Name:'sdfdh',age:23},
      {Name:'MAx',age:23},
      {Name:'MAx',age:23},
      {Name:'MAx',age:300}
    ]
  });
  }
  render() {
    return (
      <div className="App">
        <input type='text' onChange={(event)=>this.switchNameHandler} />
        <p>{this.state.text}</p>
        {this.state.text.length > 5 ? <p>length ok</p>:  <p>too short!!</p>}

      </div>
    );
  }
}

export default App;
