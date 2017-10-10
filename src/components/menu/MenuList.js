import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import CategoryService from '../../services/CategoryService'
import axios from 'axios'

import MenuItem from '../items/MenuItem'
import CategoryList from './CategoryList'

 class MenuList extends Component {
     constructor(props){
         super();

         this.state = {activeTab: 'tab0',isSelected : false,categories:''}             
         this.handleItemClick = this.handleItemClick.bind(this); 
         this.toggleSelected = this.toggleSelected.bind(this);
         this.renderCategories = this.renderCategories.bind(this);
         this.addCategoryService = new CategoryService();
         
     }
     toggleSelected() {
        if (this.state.isSelected === true) {
            this.setState({
                isSelected: false
            })
        }else {
            this.setState({
                isSelected: true
            })
        }
    }

    handleItemClick(e,name) {
        this.setState({activeTab : 'tab'+this.props.id });
        this.toggleSelected();
        
        var unboundForEach = Array.prototype.forEach,
            forEach = Function.prototype.call.bind(unboundForEach);

        forEach(document.querySelectorAll('a.item'), function (el) {
            if ( el.classList.contains('active') ) {
                el.classList.remove('active');
                
            }
        });
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
        const  {activeTab}  = this.state
        
        if(this.state.categories instanceof Array){
          return this.state.categories.map(function(object, i){
              return <CategoryList obj={object} key={i} id={i.toString()} />;
                      <Menu.Item className={'tab'+i}  name={this.props.id} active={activeTab === 'tab'+i|| this.state.isSelected} onClick={this.handleItemClick}  content = {object.category_name}  />

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