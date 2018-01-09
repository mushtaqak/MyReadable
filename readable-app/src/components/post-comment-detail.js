import moment from 'moment'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Comment, Container, Icon } from 'semantic-ui-react'

import PostCommentControls from './comment-controls'
import PostCommentForm from './post-comment-form'

class PostComment extends Component {
  constructor(){
    super()
    this.handleEdit=this.handleEdit.bind(this);
    this.editClosed=this.editClosed.bind(this);
  }
  state = {
    isEdit: false
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({ isEdit: true });
  }

  editClosed(event) {
    this.setState({ isEdit: false });
  }

  render() {
    const { comment } = this.props
    const { isEdit } = this.state
    return (
      <Container>
        {isEdit ? <PostCommentForm comment={comment} editClosed={this.editClosed}/> :
          <Comment>
            <Comment.Content>
              <Comment.Author>{comment.author}</Comment.Author>
              <Comment.Metadata>
                <div>{moment(comment.timestamp).format("D MMM YYYY, h:mm A")}</div>
                <Icon disabled name='thumbs outline up' />
                {comment.voteScore}
              </Comment.Metadata>
              <Comment.Text>{comment.body}</Comment.Text>
              <PostCommentControls comment={comment} handleEdit={this.handleEdit} />
            </Comment.Content>
          </Comment>
        }
      </Container>
    )
  }
}

export default connect(null, null)(PostComment)