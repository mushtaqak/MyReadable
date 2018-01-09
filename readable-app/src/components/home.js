import sortBy from 'sort-by'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react'

import PostList from './post-list';
import HeaderNavBar from './nav-header';

import { getPosts, getCategoryPosts } from '../actions/posts'


class HomePage extends Component {

    componentWillMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.fetchData()
        }
    }

    fetchData = () => {
        const { category } = this.props.match.params
        if (category != null) {
            this.props.getCategoryPosts(category)
        } else {
            this.props.getPosts()
        }
    }

    render() {
        const { posts, postSortOrder } = this.props
        if (posts) {
            posts.sort(sortBy(postSortOrder));
        }
        return (
            <Container>
                <HeaderNavBar params={this.props.match.params} />
                <Divider hidden />
                <Divider horizontal>Posts List</Divider>
                <Divider hidden />
                <PostList posts={posts} />
            </Container>
        );
    }
}


const mapStateToProps = ({ categories, posts, postSortOrder }) => ({ categories, posts, postSortOrder })
const mapDispatchToProps = { getPosts, getCategoryPosts }

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);