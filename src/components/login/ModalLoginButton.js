import React ,{Component} from 'react'
import { Button  , Header, Icon, Modal } from 'semantic-ui-react'
import UserList from '../../containers/userList'

import LoginForm from './LoginForm'

class ModalLoginButton extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleLogin(){

    }

    handleCancel(){

    }

    isLoggedIn(){
        if (this.props.isLoggedIn === true){
            return 'Welcome Mahmoud';
        }else{
            return (


                <Modal trigger={<Button  primary > <Icon name='lock' /> Login to Control Data </Button>} closeIcon>
                    <Header icon='lock' content='Please enter your credentials' />
                    <Modal.Content>
                        <small> <UserList/></small>
                        <LoginForm/>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onclick={this.handleCancel}>
                            <Icon name='remove' /> Cancel
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



export default ModalLoginButton
