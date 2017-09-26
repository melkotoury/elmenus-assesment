import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

import MenuItem from './MenuItem'

export default class ElMenu extends Component {
    state = { activeItem: 'appetizers' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='appetizers' active={activeItem === 'appetizers'} onClick={this.handleItemClick} />
                        <Menu.Item name='salads' active={activeItem === 'salads'} onClick={this.handleItemClick} />
                        <Menu.Item name='main' active={activeItem === 'main'} onClick={this.handleItemClick} />
                        <Menu.Item name='dessert' active={activeItem === 'dessert'} onClick={this.handleItemClick} />
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        <MenuItem/>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}
