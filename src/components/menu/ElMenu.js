import React, { Component } from 'react'
import MenuList from './MenuList'

import {connect} from 'react-redux'

export default class ElMenu extends Component {

    render() {
        return (
            <MenuList menu = {this.props.menu} />
            );

    }
}

ElMenu.propTypes = {
    menu: React.PropTypes.array.isRequired
}
