import React from 'react'
import { Button  , Header, Icon, Modal } from 'semantic-ui-react'

import AddItemForm from './AddItemForm'

const ModalAddItem = () => (
    <Modal trigger={<Button  positive > Add Item</Button>} closeIcon>
        <Header icon='add to cart' content='Do you want to add a new Item to this Category?' />
        <Modal.Content>
            <AddItemForm/>
        </Modal.Content>
        <Modal.Actions>
            <Button color='red'>
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green'>
                <Icon name='checkmark' /> Save
            </Button>
        </Modal.Actions>
    </Modal>


)

export default ModalAddItem
