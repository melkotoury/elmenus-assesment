import React, { Component } from 'react';
import logo from './logo.png';
import './stylesheets/App.css';

import AddCategory from './components/AddCategory';
import MenuItem from './components/MenuItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Elmenus</h2>
        </div>
        <div className="App-intro">
        <AddCategory/>
        <MenuItem />
      </div>
      </div>
      
    );
  }
}

export default App;
