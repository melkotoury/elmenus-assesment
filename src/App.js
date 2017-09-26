import React, { Component } from 'react';
import logo from './logo_dark.png';
import './App.css';

import AddCategory from './AddCategory';
import ItemList from './ItemList';

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
        <ItemList />
      </div>
      </div>
      
    );
  }
}

export default App;
