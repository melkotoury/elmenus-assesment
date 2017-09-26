import React from 'react'
import {  Item } from 'semantic-ui-react'
import ActionButton from './ActionButton'


const MenuItem = () => (
    <Item.Group>
        <Item>

            <Item.Content>
                <Item.Header>French Fries</Item.Header>
                <Item.Meta  >
                    <span className='price'>EGP 200</span>
                </Item.Meta>
                <Item.Description>Custom premium cut by farm frites. Add melted cheese for 7LE - chili con carne for 9LE</Item.Description>
            </Item.Content>
            <Item.Content floated='right'>
                <ActionButton/>
            </Item.Content>
        </Item>

        <Item>

            <Item.Content>
                <Item.Header>French Fries</Item.Header>
                <Item.Meta  >
                    <span className='price'>EGP 200</span>
                </Item.Meta>
                <Item.Description>Custom premium cut by farm frites. Add melted cheese for 7LE - chili con carne for 9LE</Item.Description>
            </Item.Content>
            <Item.Content floated='right'>
                <ActionButton/>
            </Item.Content>
        </Item>


    </Item.Group>
)

export default MenuItem
