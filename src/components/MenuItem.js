import React from 'react'
import { Container, Item , Button  } from 'semantic-ui-react'
import ActionButton from './ActionButton'

import ModalAddItem from './ModalAddItem'

import '../stylesheets/MenuItem.css'


const MenuItem = () => (
    <Container>
    <Item.Group>

        <ModalAddItem/>

        <Item>
            <Item.Content>
                <Item.Header>French Fries</Item.Header>
                <Item.Meta  >
               <span className='price'>EGP 200</span>
                </Item.Meta>
                <Item.Description>Custom premium cut by farm frites. Add melted cheese for 7LE - chili con carne for 9LE</Item.Description>
            </Item.Content>
            <span className='float-right' >
                <ActionButton/>
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
                <ActionButton/>
            </span>
        </Item>


    </Item.Group>
    </Container>
)

export default MenuItem
