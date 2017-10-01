import React ,{Component} from 'react'
import {connect} from 'react-redux'
import { Button  , Header, Icon, Modal , Form } from 'semantic-ui-react'
import UserList from '../../containers/userList'
import LoginError from '../errors/login'



class ModalLoginButton extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            username: '',
            isLoggedIn : false,
            isAdmin: false,
            errors:{}
        }
    }

    handleLogin(){
        let username = this.username.value;
        let password = this.password.value;
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




    isLoggedIn(){
        if (this.state.isLoggedIn === true){
            return 'Welcome ' + this.state.username;
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

                            <LoginError errors={this.state.errors}/>

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





export default connect(mapStateToProps)(ModalLoginButton);