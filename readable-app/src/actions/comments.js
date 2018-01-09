import { apiGET, apiPOST, apiPUT, apiDELETE } from '../utils/api'


export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT'
export const EDIT_POST_COMMENT = 'EDIT_POST_COMMENT'
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT'
export const VOTE_POST_COMMENT = 'VOTE_POST_COMMENT'


export const getPostComments = (postId) => {
    return apiGET(`/posts/${postId}/comments`, getPostCommentsAction);
}


export const addPostComment = (comment) => {
    return apiPOST(`/comments`, comment, addPostCommentAction);
}


export const editPostComment = (commentId, comment) => {
    return apiPUT(`/comments/${commentId}`, comment, editPostCommentAction);
}


export const deletePostComment = (commentId) => {
    return apiDELETE(`/comments/${commentId}`, deletePostCommentAction);
}


export const votePostComment = (commentId, vote) => {
    return apiPOST(`/comments/${commentId}`, { option: vote }, votePostCommentAction);
}


function getPostCommentsAction(comments) {
    return {
        type: GET_POST_COMMENTS,
        comments
    }
}

function addPostCommentAction(comment) {
    return {
        type: ADD_POST_COMMENT,
        comment
    }
}

function editPostCommentAction(comment) {
    return {
        type: EDIT_POST_COMMENT,
        comment
    }
}

function deletePostCommentAction(comment) {
    return {
        type: DELETE_POST_COMMENT,
        comment
    }
}

function votePostCommentAction(comment) {
    return {
        type: VOTE_POST_COMMENT,
        comment
    }
}
