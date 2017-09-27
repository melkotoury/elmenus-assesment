import React from 'react'
import { Form, Input, TextArea } from 'semantic-ui-react'

const AddItemForm = () => (
    <Form>
        <Form.Group widths='equal'>
            <Form.Field id='form-input-control-item-name' control={Input} label='Item Name' placeholder='Item Name' />
            <Form.Field id='form-input-control-item-price' control={Input} label='Item Price' placeholder='Item Price' />
        </Form.Group>
        <Form.Field id='form-textarea-control-item-description' control={TextArea} label='Item Description' placeholder='Item Description' />
    </Form>
)

export default AddItemForm