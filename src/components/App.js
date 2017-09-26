import React, { Component } from 'react';
import logo from '../assets/logo.png';
import '../stylesheets/App.css';

import AddCategory from './AddCategory';
import ElMenu from './ElMenu';

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
        <ElMenu />
      </div>
      </div>
      
    );
  }
}

export default App;
