import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'



class CategoryList extends Component {
    constructor(props){
        super();
        this.state = {activeItem: '0'}             
        this.handleItemClick = this.handleItemClick.bind(this); 
        this.handleActive = this.handleActive.bind(this); 
    }

    handleActive(event) {
        console.log(event.target.name);
        if(this.state.activeItem === event.target.name){
            return event.target.name;
        }else{
            return '';
        }
    }
        

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    

    render(){
        const  {activeItem}  = this.state
        console.log(' Props');
        console.log(this.props);
        return (
            <Menu.Item name={this.props.id} active={activeItem === this.handleActive } onClick={this.handleItemClick}  content = {this.props.obj.category_name}  />
        );
    }
}

export default CategoryList;