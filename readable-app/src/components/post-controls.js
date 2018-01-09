import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Button } from 'semantic-ui-react'

import PostInfo from './post-info'
import { deletePost, votePost } from '../actions/posts'


class PostControls extends Component {

    deletePostHandler(event) {
        const { post, deletePost, history } = this.props;
        deletePost(post.id).then(response => {
            history.push(`/`);
        })
    }

    voteUpPostHandler(event) {
        this.handleVotePost('upVote');
    }

    voteDownPostHandler(event) {
        this.handleVotePost('downVote');
    }

    handleVotePost(vote) {
        const { post, votePost, history } = this.props;
        votePost(post.id, vote).then(response => {
            history.push(`/${response.post.category}/${response.post.id}`);
        })
    }

    render() {
        const { post, commentCount } = this.props
        return (
            <Container>
                <PostInfo post={post} commentCount={commentCount}/>
                <Button
                    basic
                    compact
                    size='tiny'
                    icon='trash outline'
                    floated='right'
                    content='Delete'
                    onClick={this.deletePostHandler.bind(this)}
                />
                <Button
                    basic
                    compact
                    size='tiny'
                    icon='edit'
                    content='Edit'
                    floated='right'
                    as={Link} to={`/${post.category}/${post.id}/edit`}
                />
                <Button
                    basic
                    compact
                    size='tiny'
                    floated='right'
                    color='green'
                    icon='thumbs outline up'
                    onClick={this.voteUpPostHandler.bind(this)}
                />
                <Button
                    basic
                    compact
                    size='tiny'
                    floated='right'
                    color='red'
                    icon='thumbs outline down'
                    onClick={this.voteDownPostHandler.bind(this)}
                />
            </Container>
        );
    }
}

const mapDispatchToProps = { deletePost, votePost }
export default withRouter(connect(null, mapDispatchToProps)(PostControls));