import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuList from './MenuList'

import {connect} from 'react-redux'
import {fetchMenu} from '../../actions/menu'

class ElMenu extends Component {

    componentDidMount(){
        this.props.fetchMenu();
    }
    render() {
        return (
            <MenuList menu = {this.props.menu} />
            );

    }
}

ElMenu.propTypes = {
    menu:      PropTypes.array.isRequired,
    fetchMenu: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps , {fetchMenu})(ElMenu)
