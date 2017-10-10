import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import CategoryService from '../../services/CategoryService'
import axios from 'axios'

import MenuItem from '../items/MenuItem'
import CategoryList from './CategoryList'

 class MenuList extends Component {
     constructor(props){
         super();
         this.state = {  categories: '' };
         this.renderCategories = this.renderCategories.bind(this);
         this.addCategoryService = new CategoryService();
         
     }

     componentWillMount(){
        axios.get('http://localhost:4200/categories')
        .then(response => {
          this.setState({ categories: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
      }


      renderCategories(){
        if(this.state.categories instanceof Array){
          return this.state.categories.map(function(object, i){
              return <CategoryList obj={object} key={i} id={i.toString()} />;
          })
        }
      }


    render() {

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                       
                        {this.renderCategories()}
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        <MenuItem isAdmin={this.props.isAdmin} categories={this.state.categories}/>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default  MenuList;