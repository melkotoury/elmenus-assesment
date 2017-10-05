import React, { Component } from 'react'
import MenuList from './MenuList'



class ElMenu extends Component {

    render() {
        return (
            <MenuList  isAdmin={this.props.isAdmin}/>
            );

    }
}

export default ElMenu
