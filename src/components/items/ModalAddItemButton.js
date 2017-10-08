import React , {Component} from 'react'
import { Button  , Header, Icon, Modal,Form } from 'semantic-ui-react'


class ModalAddItem extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
 }



         handleClick(){

            console.log(this.item_name.value);
            console.log(this.item_price.value);
            console.log(this.item_description.value);
         }

        render() {
            return (

    <Modal trigger={<Button  positive  > Add Item</Button>} closeIcon>
        <Header icon='add to cart' content='Do you want to add a new Item to this Category?' />
        <Modal.Content>
        <Form>
            <Form.Field>
            <label >Item Name</label>
            <input 
                type="text" 
                ref={(item_name) => this.item_name = item_name}
                placeholder="Item Name"/>  
            </Form.Field>
              <Form.Field>
            <label >Item Price</label>
            <input 
                type="number" 
                ref={(item_price) => this.item_price = item_price}
                placeholder="Item Price"/>  
            </Form.Field>
              <Form.Field>
            <label >Item Description</label>
            <textarea
                ref={(item_description) => this.item_description = item_description}
                placeholder="Item Description">  
                </textarea>
            </Form.Field>
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button color='red'>
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green' onClick={this.handleClick}>
                <Icon name='checkmark' /> Save
            </Button>
        </Modal.Actions>
    </Modal>
                );
        }
   

}





export default ModalAddItem
