import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import '../stylesheets/userList.css'

class UserList extends Component{
    createListItems(){
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>username: <span className="red">{user.username}</span> & password: <span className="red">{user.password}</span> & role is <span className="red"> {user.role}</span></li>
        );
        });
    }
    render(){
        return (
            <ul>
                {this.createListItems()}
            </ul>
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

export default connect(mapStateToProps)(UserList);