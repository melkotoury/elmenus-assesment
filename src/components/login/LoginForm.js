import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const LoginForm = () => (
    <Form>
        <Form.Group widths='equal'>
            <Form.Field id='form-input-control-username'      control={Input} label='username' placeholder='username' />
            <Form.Field id='form-input-control-password' control={Input} type='password' label='password' placeholder='password' />
        </Form.Group>
    </Form>
)

export default LoginForm