import React from 'react'
import { Container,List } from 'semantic-ui-react'
import './ItemList.css'

import ActionButton from './ActionButton'

const ItemList = () => (

  /* 
  
  */
    <Container >
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
      <ActionButton />
      </List.Content>
      <List.Icon name='list layout' />
      <List.Content>
        English Breakfast
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <ActionButton />
      </List.Content>

      <List.Icon name='list layout' />      
      <List.Content>
        French Breakfast
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <ActionButton />
      </List.Content>

      <List.Icon name='list layout' />      
      <List.Content>
        Swiss Breakfast
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <ActionButton />
      </List.Content>
      <List.Icon name='list layout' />      
      <List.Content>
        Healthy Breakfast
      </List.Content>
    </List.Item>
  </List>
  </Container>
)

export default ItemList
