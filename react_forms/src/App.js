import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      anotherText: '',
      password: '',
    }
    this.key = 'ajaysharma08';
  }

  changeState = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  showContent = (e) => {
    e.preventDefault();
    if(this.state.password === this.key) {
      document.getElementById('content').style.display = 'inherit';
      document.getElementById('form').style.display = 'none';
    }
  }
  
  render() {
    return(
      <div id='App'>
        <form id='form' autocomplete='off' onSubmit={this.showContent}>
          
          <label htmlFor='text'>Enter Somthing</label>
          <input id='text' placeholder='Enter Here' name='text' onChange={this.changeState}/>
          
          <label htmlFor='anotherText'>Enter Somthing Else</label>
          <input id='anotherText' placeholder='Enter anything else...' name='anotherText' onChange={this.changeState} />
          
          <label htmlFor='pass'>Enter Password</label>
          <input id='pass' type='password' placeholder='Enter Password' name='password' onChange={this.changeState}></input>
          
          <button id='btn' type='submit' >Submit</button>
        
        </form>
        <h1 id='content'>You Entered: {this.state.text} and {this.state.anotherText}</h1>
      </div>
    )
  }
}

export default App;
