import React from 'react'
import { Grid, Button, Divider, Form } from 'semantic-ui-react'
import '../../stylesheets/AddCategory.css'



const AddCategory = () => (
    <div className='createCategoryForm'>


            <Form size='tiny' key='tiny'>
                <Grid>
                    <Grid.Row columns={3}>

                    <Grid.Column>
                    <Form.Field  control='input' placeholder='English Name' />
                    </Grid.Column>
                    <Grid.Column>
                    <Form.Field  control='input' placeholder='English Description' />
                    </Grid.Column>
                    <Grid.Column>
                        <Button positive fluid> Create Category</Button>
                    </Grid.Column>


                    </Grid.Row>
                </Grid>



                <Divider hidden />
            </Form>

    </div>
)
export default AddCategory