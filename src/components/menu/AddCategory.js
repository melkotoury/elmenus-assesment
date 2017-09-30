import React , {Component} from 'react'
import { Grid, Button, Divider, Form } from 'semantic-ui-react'
import CategoryService from '../../services/CategoryService'
import '../../stylesheets/AddCategory.css'


class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.addCategoryService = new CategoryService();
    }

    handleAppearance(){
        if (this.props.role === 'admin'){
            return (
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
                                    placeholder='English Description'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Button positive fluid  onClick={this.handleClick}>Create Category</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider hidden />
                </Form>
            );
        }else{
            return '';
        }

    }
    handleClick(event) {
        let category_name        = this.category_name.value;
        let category_description = this.category_description.value;
        let value = {
                category_name:category_name,
                category_description:category_description
        }
        console.log(value);
         this.addCategoryService.sendData(value);
        event.preventDefault();
    }
    render() {
            return (
                <div className='createCategoryForm'>
                    {this.handleAppearance()}
                </div>
    );
}
}
export default AddCategory