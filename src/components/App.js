import React, { Component } from 'react'
import logo from '../assets/logo.png'
import {connect} from 'react-redux'

import '../stylesheets/App.css'

import AddCategory from './menu/AddCategory'
import ElMenu from './menu/ElMenu'
import ModalLoginButton from './login/ModalLoginButton'




class App extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);

    }
    state = {
        username: '',
        isLoggedIn : false,
        isAdmin: false,
        errors:{}
    }

    login(user){
        let username = user.username;
        let password = user.password;
        return this.props.users.map((user) => {
            if (username === user.username && password === user.password && user.role === 'admin')
            {
                this.setState({
                    username:user.username,
                    isLoggedIn:true,
                    isAdmin:true,
                    errors:['']
                });



            }else if(username === user.username && password === user.password && user.role !== 'admin')
            {
                this.setState({
                    username:user.username,
                    isLoggedIn:true,
                    isAdmin:false,
                    errors:['']
                });
            }else if(username !== user.username && password === user.password )
            {
                this.setState({
                    errors:{username:'Username is not valid'},
                });
            }else if(username === user.username && password !== user.password )
            {
                this.setState({
                    errors:{password:'Password is not valid'},
                });
            }else if(username !== user.username && password !== user.password )
            {
                this.setState({
                    errors:{username:'Username is not valid',password:'Password is not valid'},
                });
            }
            else
            {
                this.setState({
                    errors:{username:'Username is not valid',password:'Password is not valid'},
                });
            }

            return '';
        });
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Elmenus</h2>
                    <ModalLoginButton
                        login = {this.login}
                        username = {this.state.username}
                        isLoggedIn = {this.state.isLoggedIn}
                        errors = {this.state.errors}/>
                </div>
                <div className="App-intro">
                    <AddCategory isAdmin={this.state.isAdmin} />
                    <ElMenu isAdmin={this.state.isAdmin}/>


                </div>
            </div>

        );
    }
}





/**
 * this function take your store and pass it to your component as a property
 * */
function mapStateToProps(state) {
    return {
        users : state.users
    }
}




export default connect(mapStateToProps)(App);


