import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Comment, Divider } from 'semantic-ui-react'

import PostComment from './post-comment-detail';
import PostCommentForm from './post-comment-form';
import { getPostComments } from '../actions/comments'


class PostCommentList extends Component {
    render() {
        const { comments } = this.props
        return (
            <Comment.Group>
                <Divider horizontal>Comments</Divider>
                {comments.length ? comments.map((comment) => (
                    <PostComment key={comment.id} comment={comment} />
                )):
                <div>Be the first to comment.</div>
                }
                <Divider horizontal>Leave a comment</Divider>
                <PostCommentForm/>
            </Comment.Group>
        )
    }
}


const mapStateToProps = ({ comments }) => ({ comments })
const mapDispatchToProps = { getPostComments }
export default connect(mapStateToProps, mapDispatchToProps)(PostCommentList)