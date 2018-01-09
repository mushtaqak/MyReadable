import React from 'react'
import { Divider, Header, Grid, Segment } from 'semantic-ui-react'

import PostControls from './post-controls';


export default function PostDetailItem({ post, commentCount}) {

    return (
        <Grid centered>
            <Grid.Column width={16}>
                <Segment>
                    <Header as='h2'>{post.title}</Header>
                    <Divider hidden />
                    <PostControls post={post} commentCount={commentCount? commentCount: post.commentCount} />
                    <Divider hidden />
                    <div>{post.body}</div>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
