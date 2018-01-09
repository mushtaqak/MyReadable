import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Divider, Menu, Header } from 'semantic-ui-react'

import NavControls from './nav-controls';
import { getCategories } from '../actions/categories'

class HeaderNavBar extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.props.getCategories()
    }

    render() {
        const { categories } = this.props
        return (
            <Container>
                <Divider horizontal><Header>Mushi Readable</Header></Divider>
                <Menu>
                    <Menu.Item active={this.props.params.category == null} as={Link} to='/'>All</Menu.Item>
                    {categories.map(category => (
                        <Menu.Item
                            key={category.path}
                            active={this.props.params.category === category.path}
                            as={Link} to={`/${category.path}`}
                        >
                            {category.name}
                        </Menu.Item>
                    ))}
                    <Menu.Item position='right'>
                        <NavControls params={this.props.params} />
                    </Menu.Item>
                </Menu>
            </Container>
        )
    }
}

const mapStateToProps = ({ categories, posts }) => ({ categories, posts })
const mapDispatchToProps = { getCategories }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavBar);