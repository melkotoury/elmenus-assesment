import React , {Component} from 'react'
import { Grid, Button, Divider, Form } from 'semantic-ui-react'
import '../../stylesheets/AddCategory.css'



class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            descriptionValue:''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({nameValue: event.target.nameValue});
    }
    handleDescriptionChange(event) {
        this.setState({descriptionValue: event.target.descriptionValue});
    }
    handleSubmit(event) {
        alert(this.state.nameValue);
        console.log(this.state.descriptionValue);
        event.preventDefault();
    }

    render () {
        return (
            <div className='createCategoryForm'>


                <Form size='tiny' key='tiny' onSubmit={this.handleSubmit}>
                    <Grid>
                        <Grid.Row columns={3}>

                            <Grid.Column>
                                <Form.Field value={this.state.nameValue} type='text' onChange={this.handleNameChange}  control='input' placeholder='English Name' />
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Field value={this.state.descriptionValue} type='text' onChange={this.handleDescriptionChange}  control='input' placeholder='English Description' />
                            </Grid.Column>
                            <Grid.Column>
                                <Button positive fluid type="submit"> Create Category</Button>
                            </Grid.Column>


                        </Grid.Row>
                    </Grid>



                    <Divider hidden />
                </Form>

            </div>
        );
    }

}
export default AddCategory