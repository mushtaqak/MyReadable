import moment from 'moment'
import React from 'react'
import { Container, Icon } from 'semantic-ui-react'


export default function PostInfo({ post, commentCount }) {
    return (
        <Container className='post-info-container'>
            <Icon name='user' />{post.author}
            <Icon name='tag' />{post.category}
            <Icon name='comments outline' />{commentCount? commentCount: post.commentCount}
            <Icon name='thumbs outline up' />{post.voteScore}
            <Icon name='calendar outline' />{moment(post.timestamp).format("D MMM YYYY, h:mm A")}
        </Container>
    )
}

