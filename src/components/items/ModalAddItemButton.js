import React , {Component} from 'react'
import { Button  , Header, Icon, Modal } from 'semantic-ui-react'


class ModalAddItem extends Component {
    constructor() {
        super();
 }

        render() {
            return (

    <Modal trigger={<Button  positive > Add Item</Button>} closeIcon>
        <Header icon='add to cart' content='Do you want to add a new Item to this Category?' />
        <Modal.Content>
            <input type="text" label= "Item Name" placeholder="Item Name" />
            <input type="text" label= "Item price" placeholder="Item price" />
            <textArea label= "Item Description" placeholder="Item Description"></textArea>
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
                );
        }
   

}





export default ModalAddItem
