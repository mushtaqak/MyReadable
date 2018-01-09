import React from 'react';
import { Card, Container } from 'semantic-ui-react'

import PostListItem from './post-list-item'


export default function PostList({ posts }) {

    return (
        <Container>
            <Card.Group>
                {posts && posts.map((post) => (
                    <PostListItem key={post.id} post={post} />
                ))}
            </Card.Group>
        </Container>
    );
};
