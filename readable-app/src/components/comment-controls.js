
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment, Button } from 'semantic-ui-react'

import { deletePostComment, votePostComment } from '../actions/comments'


class PostCommentControls extends Component {

    deleteCommentHandler(event) {
        const { comment, deletePostComment } = this.props;
        deletePostComment(comment.id);
    }

    voteUpCommentHandler(event) {
        this.handleVoteComment('upVote');
    }

    voteDownCommentHandler(event) {
        this.handleVoteComment('downVote');
    }

    handleVoteComment(vote) {
        const { comment, votePostComment } = this.props;
        votePostComment(comment.id, vote);
    }

    render() {
        return (
            <Comment.Actions>
                <Comment.Action>
                    <Button
                        basic
                        compact
                        size='tiny'
                        color='red'
                        icon='thumbs outline down'
                        onClick={this.voteDownCommentHandler.bind(this)}
                    />
                </Comment.Action>
                <Comment.Action>
                    <Button
                        basic
                        compact
                        size='tiny'
                        color='green'
                        icon='thumbs outline up'
                        onClick={this.voteUpCommentHandler.bind(this)}
                    />
                </Comment.Action>
                <Comment.Action>
                    <Button
                        basic
                        compact
                        size='tiny'
                        icon='edit'
                        content='Edit'
                        onClick={this.props.handleEdit}
                    />
                </Comment.Action>
                <Comment.Action>
                    <Button
                        basic
                        compact
                        size='tiny'
                        icon='trash outline'
                        content='Delete'
                        onClick={this.deleteCommentHandler.bind(this)}
                    />
                </Comment.Action>
            </Comment.Actions >
        );
    }
}


const mapDispatchToProps = { deletePostComment, votePostComment }
export default connect(null, mapDispatchToProps)(PostCommentControls);