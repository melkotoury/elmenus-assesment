import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'



class CategoryList extends Component {
    constructor(props){
        super();
        this.state = {activeTab: 'tab0',isSelected : false}             
        this.handleItemClick = this.handleItemClick.bind(this); 
        this.toggleSelected = this.toggleSelected.bind(this);
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
        this.setState({activeTab : 'tab'+this.props.id ,isSelected:true});
        this.toggleSelected();
        let tab = 'tab'+this.activeTab;
        
        
        var unboundForEach = Array.prototype.forEach,
            forEach = Function.prototype.call.bind(unboundForEach);

        forEach(document.querySelectorAll('a.item'), function (el) {
            console.log(tab);
            console.log(el.classList.contains(tab));
            if ( el.classList.contains('active') ) {
                el.classList.remove('active');
                
            }
        });
    }


    render(){
        const  {activeTab}  = this.state
        return (
             
                <Menu.Item className={'tab'+this.props.id}  name={this.props.id} active={activeTab === 'tab'+this.props.id || this.state.isSelected} onClick={this.handleItemClick}  content = {this.props.obj.category_name}  />
            
        );
    }
}


export default CategoryList;