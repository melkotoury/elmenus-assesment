import React , {Component} from 'react'
import { Grid, Button, Divider, Form } from 'semantic-ui-react'
import '../../stylesheets/AddCategory.css'
class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        alert('A name was submitted: ' + this.category_name.value);
        console.log('A description ' + this.category_description.value);
        event.preventDefault();
    }
    render() {
            return (
                <div className='createCategoryForm'>
                    <Form size='tiny' key='tiny' >
                        <Grid>
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <input 
                                        ref={(category_name) => this.category_name = category_name} 
                                        type='text'   
                                        placeholder='English Name' 
                                    />
                                 </Grid.Column>
                                 <Grid.Column>
                                    <input 
                                        ref={(category_description) => this.category_description = category_description} 
                                        type='text'  
                                        placeholder='English Name'
                                     />
                                 </Grid.Column>
                                 <Grid.Column>
                                    <Button positive fluid  onClick={this.handleClick}>Create Category</Button>
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