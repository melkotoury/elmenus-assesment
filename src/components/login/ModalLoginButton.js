import React from 'react'
import { Button  , Header, Icon, Modal } from 'semantic-ui-react'
import UserList from '../../containers/userList'

import LoginForm from './LoginForm'

const ModalLoginButton = () => (
    <Modal trigger={<Button  primary > <Icon name='lock' /> Login to Control Data </Button>} closeIcon>
        <Header icon='lock' content='Please enter your credentials' />
        <Modal.Content>
            <small> <UserList/></small>
            <LoginForm/>
        </Modal.Content>
        <Modal.Actions>
            <Button color='red'>
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green'>
                <Icon name='lock' /> Login
            </Button>
        </Modal.Actions>
    </Modal>


)

export default ModalLoginButton