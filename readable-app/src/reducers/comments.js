import {
    GET_POST_COMMENTS,
    ADD_POST_COMMENT,
    EDIT_POST_COMMENT,
    DELETE_POST_COMMENT,
    VOTE_POST_COMMENT
} from '../actions/comments'


export function comments(state = [], action) {
    const { comments } = action;
    switch (action.type) {
        case GET_POST_COMMENTS:
            return comments;
        case ADD_POST_COMMENT:
            // Add new comment to state.
            return state.concat(action.comment);
        // Update state with updated post.
        case VOTE_POST_COMMENT:
        case EDIT_POST_COMMENT:
            return state.map((comment) => comment.id === action.comment.id ? action.comment : comment);
        case DELETE_POST_COMMENT:
            // Remove post from state.
            return state.filter(comment => comment.id !== action.comment.id);
        default:
            return state;
    }
}
