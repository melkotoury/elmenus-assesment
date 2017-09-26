import React from 'react'
import { Container, Item } from 'semantic-ui-react'
import ActionButton from './ActionButton'


const MenuItem = () => (
    <Container>
    <Item.Group>
        <Item>

            <Item.Content>
                <Item.Header>French Fries</Item.Header>
                <Item.Meta  >
ta                  <span className='price'>EGP 200</span>
                </Item.Meta>
                <Item.Description>Custom premium cut by farm frites. Add melted cheese for 7LE - chili con carne for 9LE</Item.Description>
            </Item.Content>
            <Item.Content >
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
            <Item.Content >
                <ActionButton/>
            </Item.Content>
        </Item>


    </Item.Group>
    </Container>
)

export default MenuItem
