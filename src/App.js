import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayUser from './screens/displayUser.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    let user = window.location.pathname.toString().substring(1);
    console.log("window", window.location );
  }


  render() {
    return (
      <div className="App">
        <DisplayUser />
      </div>
    );
  }
}

export default App;
