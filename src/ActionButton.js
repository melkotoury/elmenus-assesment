import React from 'react'
import { Button } from 'semantic-ui-react'

const ActionButton = () => (
  <Button.Group>
    <Button color='yellow'>Edit</Button>
    <Button.Or />
    <Button negative>Delete</Button>
  </Button.Group>
)

export default ActionButton