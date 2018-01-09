import uuidv4 from 'uuid/v4'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

import { addPostComment, editPostComment } from '../actions/comments'

class PostCommentForm extends Component {

    state = {
        author: '',
        body: '',
        isEdit: false
    }

    componentWillMount() {
        const { comment } = this.props
        if (comment) {
            this.setState({
                author: comment.author,
                body: comment.body,
                isEdit: true
            });
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCancel(event){
        event.preventDefault();
        const {isEdit} = this.state
        const {editClosed } = this.props
        if(isEdit) {
            editClosed();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const { author, body, isEdit } = this.state
        const { posts, comment, editPostComment, addPostComment, editClosed } = this.props
        if (isEdit) {
            editPostComment(comment.id, {
                author: author,
                body: body,
                parentId: posts[0].id
            }).then(response => {
                editClosed();
            });
        } else {
            addPostComment({
                id: uuidv4(),
                author: author,
                body: body,
                parentId: posts[0].id,
                timestamp: Date.now()
            });
        }
        this.setState({
            author: '',
            body: '',
            isEdit: false
        });

    }

    render() {
        const { author, body, isEdit } = this.state;
        return (
            <Form reply onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Field>
                    <label>Author</label>
                    <input
                        type='text'
                        name='author'
                        value={author}
                        placeholder='Author'
                        onChange={this.handleChange.bind(this)}
                    />
                    <Form.Field>
                        <label>Body</label>
                        <Form.TextArea
                            name='body'
                            value={body}
                            placeholder='Body'
                            autoHeight
                            onChange={this.handleChange.bind(this)}
                        />
                    </Form.Field>
                </Form.Field>
                {isEdit ? <Button
                    content='Cancel'
                    labelPosition='left'
                    icon='edit'
                    onClick={this.handleCancel.bind(this)}
                    primary /> : ''
                }
                <Button content={isEdit ? 'Save' : 'Comment'} labelPosition='left' icon='edit' primary />
            </Form>
        )
    }
}

const mapStateToProps = ({ posts }) => ({ posts })
const mapDispatchToProps = { addPostComment, editPostComment }
export default connect(mapStateToProps, mapDispatchToProps)(PostCommentForm)