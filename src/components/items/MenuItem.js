import React ,{Component} from 'react'
import { Container, Item  } from 'semantic-ui-react'
import ActionButton from './ActionButton'

import ModalAddItem from './ModalAddItemButton'

import '../../stylesheets/MenuItem.css'


class MenuItem extends Component {
    constructor() {
        super();
        this.handleAddItemAppearance = this.handleAddItemAppearance.bind(this);
        this.handleActionButtonsAppearance = this.handleActionButtonsAppearance.bind(this);
    }


    handleAddItemAppearance(){
                if (this.props.isAdmin) {

            return (
        <ModalAddItem  />
                );

        } else {
            return '';
        }
    }



    handleActionButtonsAppearance(){
        if (this.props.isAdmin) {
            return(
                <ActionButton/>
                );
        } else {
            return '';
        }
    }
    render(){

        return(
            <Container>
    <Item.Group>
            <div>
                {this.handleAddItemAppearance()}
            </div>

        <Item>
            <Item.Content>
                <Item.Header>French Fries</Item.Header>
                <Item.Meta  >
               <span className='price'>EGP 200</span>
                </Item.Meta>
                <Item.Description>Custom premium cut by farm frites. Add melted cheese for 7LE - chili con carne for 9LE</Item.Description>
            </Item.Content>
            <span className='float-right' >
                <div>{this.handleActionButtonsAppearance()}</div>
            </span>
        </Item>

        <Item>

            <Item.Content>
                <Item.Header>Nacho Chips & Salsa</Item.Header>
                <Item.Meta  >
                    <span className='price'>EGP 200</span>
                </Item.Meta>
                <Item.Description>Homemade crispy nacho chips served with fresh salsa dip</Item.Description>
            </Item.Content>
            <span className='float-right' >
                <div>{this.handleActionButtonsAppearance()}</div>
            </span>
        </Item>


    </Item.Group>
    </Container>
            );
        
    }
}




export default MenuItem
