import uuidv4 from 'uuid/v4'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Divider, Form, Segment, TextArea } from 'semantic-ui-react'

import HeaderNavBar from './nav-header';
import { addPost, editPost, getPostDetail } from '../actions/posts'


class CreateEditPostPage extends Component {

    state = {
        title: '',
        body: '',
        author: '',
        category: 'udacity',
        isCreate: true
    }

    componentWillMount() {
        const postId = this.props.match.params.postId;
        if (postId) {
            this.setState({ isCreate: false });
            this.props.getPostDetail(postId);
        }
    }

    componentWillReceiveProps(nextProps) {
        const {posts} = nextProps
        if(!this.state.isCreate && posts.length) {
            const post = posts[0];
            this.setState({
                title: post.title,
                body: post.body,
                author: post.author,
                category: post.category
            });
        }
    }

    handleCancel(event){
        event.preventDefault();
        const {isCreate} = this.state
        const {history} = this.props
        if(isCreate) {
            history.push(`/`);
        } else {
            history.push(`/${this.props.category}/${this.props.posts[0].id}`)
        }
    }

    handleSubmit(event) {
        const {title, body, author, category, isCreate} = this.state
        if(isCreate) {
            this.createPost({
                id: uuidv4(),
                title: title,
                body: body,
                author: author,
                category: category,
                timestamp: Date.now()
            })
        } else {
            const postId = this.props.posts[0].id;
            this.updatePost(postId, {
                title: title,
                body: body,
                author: author,
                category: category
            });
        }

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    createPost = post => {
        const { addPost, history } = this.props
        addPost(post).then(response => {
            history.push(`/${response.post.category}/${response.post.id}`)
        })
    }

    updatePost = (postId, post) => {
        const { editPost, history } = this.props
        editPost(postId, post).then(response => {
            history.push(`/${response.post.category}/${response.post.id}`)
        })
    }

    render() {
        const { title, body, author, category, isCreate } = this.state;
        const { categories } = this.props
        return (
            <Container>
                <HeaderNavBar params={this.props.match.params} />
                <Divider hidden />
                <Divider horizontal >{isCreate ? 'Create' : 'EditCreate'} Post</Divider>
                <Segment>
                    <Form onSubmit={(event) => this.handleSubmit(event)}>
                        <Form.Field>˙
                            <label>Title</label>
                            <input
                                type='text'
                                name='title'
                                placeholder='Title'
                                value={title}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Body</label>
                            <TextArea
                                name='body'
                                value={body}
                                placeholder='Body'
                                autoHeight
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Author</label>
                            <input
                                type='text'
                                name='author'
                                value={author}
                                placeholder='Author'
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Field>

                        <Form.Field id='category'>
                            <label>Category</label>
                            <select
                                name='category'
                                value={category}
                                placeholder='Category'
                                onChange={this.handleChange.bind(this)}
                                className='ui selection dropdown'>
                                <option value='' disabled>Select a category</option>
                                {categories && categories.map(category => (
                                    <option key={category.name} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </Form.Field>

                        <Button
                            secondary
                            type='button'
                            onClick={this.handleCancel.bind(this)}
                        >
                        Cancel
                        </Button>
                        <Button primary type='submit'>{isCreate ? 'Create' : 'Save'}</Button>
                    </Form>
                </Segment>
            </Container>
        );
    }
}


const mapStateToProps = ({ posts, categories }) => ({ posts, categories })
const mapDispatchToProps = { addPost, editPost, getPostDetail }
export default connect(mapStateToProps, mapDispatchToProps)(CreateEditPostPage);