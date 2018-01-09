
import React from 'react'
import {  Link } from 'react-router-dom';
import { Grid, Header, Segment, Divider } from 'semantic-ui-react'

import PostInfo from './post-info'


export default function PostListItem({ post }) {

    return (
        <Grid centered>
            <Grid.Column width={16}>
                <Segment>
                    <Header as='h2'><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></Header>
                    <Divider hidden />
                    <PostInfo post={post} />
                    <Divider hidden />
                    <div>{post.body}</div>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
