import React, { Component } from 'react'
import logo from '../assets/logo.png'
import '../stylesheets/App.css'

import AddCategory from './menu/AddCategory'
import ElMenu from './menu/ElMenu'
import ModalLoginButton from './login/ModalLoginButton'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Elmenus</h2>
            <ModalLoginButton isLoggedIn={true} />
        </div>
        <div className="App-intro">
            <AddCategory role='admin' > </AddCategory>
        <ElMenu />


      </div>
      </div>
      
    );
  }
}

export default App;
