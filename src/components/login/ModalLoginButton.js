import React ,{Component} from 'react'
import {connect} from 'react-redux'
import { Button  , Header, Icon, Modal , Form } from 'semantic-ui-react'
import UserList from '../../containers/userList'
import LoginError from '../errors/login'
import PropTypes from 'prop-types';



class ModalLoginButton extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);

    }

    handleLogin(){

        let username = this.username.value;
        let password = this.password.value;
        let user = {
            username: username,
            password:password
        }

        this.props.login(user);


    }




    isLoggedIn(){

        if (this.props.isLoggedIn === true){
            return 'Welcome ' + this.props.username;
        }else{
            return (


                <Modal trigger={<Button  primary > <Icon name='lock' /> Login to Control Data </Button>} closeIcon>
                    <Header icon='lock' content='Please enter your credentials' />
                    <Modal.Content>
                        <small> <UserList/></small>
                        <Form>
                            <Form.Group widths='equal'>
                                <input
                                    type='text'
                                    ref={(username) => this.username = username}
                                    placeholder='username' />
                                <input
                                    type='password'
                                    ref={(password) => this.password = password}
                                    placeholder='password' />
                            </Form.Group>

                            <LoginError errors={this.props.errors}/>

                        </Form>


                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={this.handleCancel}>
                            <Icon name='cancel' /> Cancel
                        </Button>

                        <Button color='green' onClick={this.handleLogin}>
                            <Icon name='lock' /> Login
                        </Button>
                    </Modal.Actions>
                </Modal>
            );
        }
    }

    render(){
        return (
            <div>
                {this.isLoggedIn()}
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


ModalLoginButton.propTypes = {
    login: PropTypes.func.isRequired
}


export default connect(mapStateToProps)(ModalLoginButton);