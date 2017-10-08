import React , {Component} from 'react'
import { Grid, Button, Divider, Form } from 'semantic-ui-react'
import CategoryService from '../../services/CategoryService'
import '../../stylesheets/AddCategory.css'


class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {category_name: '' , category_description : ''}
        this.handleClick = this.handleClick.bind(this);
        this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
        this.handleCategoryDescriptionChange = this.handleCategoryDescriptionChange.bind(this);
        this.addCategoryService = new CategoryService();
    }

    handleCategoryNameChange(event){
        this.setState({category_name:event.target.value});
    }

    handleCategoryDescriptionChange(event){
        this.setState({category_description:event.target.value});
    }

    handleAppearance(){
        if (this.props.isAdmin === true){
            return (
                <Form size='tiny' key='tiny' >
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <input
                                    ref={(category_name) => this.category_name = category_name}
                                    type='text'
                                    placeholder='English Name'
                                    value={this.state.category_name}
                                    onChange= {this.handleCategoryNameChange}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <input
                                    ref={(category_description) => this.category_description = category_description}
                                    type='text'
                                    placeholder='English Description'
                                    value={this.state.category_description}
                                    onChange= {this.handleCategoryDescriptionChange}
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
        // let category_name        = this.category_name.value;
        // let category_description = this.category_description.value;
         let value = {
                 category_name:this.state.category_name,
                 category_description:this.state.category_description
         }

    
        this.addCategoryService.sendData(value);
        this.category_name.value = '';
        this.category_description.value = '';

        
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