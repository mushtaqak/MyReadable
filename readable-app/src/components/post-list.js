import React from 'react';
import { Card, Container } from 'semantic-ui-react'

import PostListItem from './post-list-item'
import NotFoundPage from './not-found-page'


export default function PostList({ posts }) {

    return (
        <Container>
            <Card.Group>
                {posts.length ? posts.map((post) => (
                    <PostListItem key={post.id} post={post} />
                )):
                <NotFoundPage message='No post found.'/>
                }
            </Card.Group>
        </Container>
    );
};
