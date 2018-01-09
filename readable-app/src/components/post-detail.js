import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider, Message } from 'semantic-ui-react'

import { getPostDetail } from '../actions/posts'
import { getPostComments } from '../actions/comments'
import HeaderNavBar from './nav-header';
import PostDetailItem from './post-detail-item';
import PostCommentList from './post-comment-list';

class PostDetailPage extends Component {

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.fetchData()
        }
    }

    fetchData = () => {
        const { postId } = this.props.match.params
        const {getPostDetail, getPostComments} = this.props
        getPostDetail(postId)
        getPostComments(postId)
    }

    render() {
        const { posts, comments } = this.props
        const isPostEmpty = posts.length === 0;
        return (
            <Container>
                <HeaderNavBar params={this.props.match.params} />
                <Divider hidden />
                {isPostEmpty ? <Message negative><Message.Header>Post not found</Message.Header></Message>
                    :
                    <Container>
                        <Divider horizontal >Post Detail</Divider>
                        <PostDetailItem post={posts[0]} commentCount={comments.length} />
                        <PostCommentList post={posts[0]} />
                    </Container>
                }
            </Container>
        );
    }
}


const mapStateToProps = ({ posts, comments }) => ({ posts, comments })
const mapDispatchToProps = { getPostDetail, getPostComments }

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);