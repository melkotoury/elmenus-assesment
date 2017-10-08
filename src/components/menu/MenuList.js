import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import CategoryService from '../../services/CategoryService'
import axios from 'axios'

import MenuItem from '../items/MenuItem'

 class MenuList extends Component {
     constructor(props){
         super();
         this.state = { activeItem: 'appetizers', categories: '' };
         this.handleItemClick = this.handleItemClick.bind(this);
         this.addCategoryService = new CategoryService();
         
     }

     componentWillMount(){
        axios.get('http://localhost:4200/categories')
        .then(response => {
          this.setState({ categories: response.data });
          console.log("Inside category Will Mount");
          console.log(this.state.categories);
        })
        .catch(function (error) {
          console.log(error);
        })
      }


      renderCategories(){
        if(this.state.categories instanceof Array){
          return this.state.categories.map(function(object, i){
              console.log("Object");
              console.log(object.category_name);
              return <Menu.Item  key={i} name={object.category}   content = {object.category}   />;
          })
        }
      }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        {/* <Menu.Item name='appetizers' active={activeItem === 'appetizers'} onClick={this.handleItemClick}  content = "Appetizers"  />
                        <Menu.Item name='salads' active={activeItem === 'salads'} onClick={this.handleItemClick} content= "Salads"/>
                        <Menu.Item name='main' active={activeItem === 'main'} onClick={this.handleItemClick} content ="Main Course" />
                        <Menu.Item name='dessert' active={activeItem === 'dessert'} onClick={this.handleItemClick} content = "Desserts"/> */}
                        {this.renderCategories()}
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        <MenuItem isAdmin={this.props.isAdmin}/>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default  MenuList;