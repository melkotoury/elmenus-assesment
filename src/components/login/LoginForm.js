import React from 'react'
import { Form } from 'semantic-ui-react'

const LoginForm = () => (
    <Form>
        <Form.Group widths='equal'>
            <input id='form-input-control-username'  label='username' placeholder='username' />
            <input id='form-input-control-password'  type='password' label='password' placeholder='password' />
        </Form.Group>
    </Form>
)

export default LoginForm