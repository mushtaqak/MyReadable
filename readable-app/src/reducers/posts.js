import {
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    GET_POST_DETAIL,
    VOTE_POST,
    GET_ALL_POSTS,
    GET_POSTS_BY_CATEGORY
} from '../actions/posts'


export function posts(state = [], action) {
    const { posts } = action;
    switch (action.type) {
        case ADD_POST:
            // Add new post to state.
            state.push(action.post);
            return state;
        case VOTE_POST:
        case EDIT_POST:
            // Update state with updated post.
            return state.map((post) => post.id === action.post.id ? action.post : post);
        case DELETE_POST:
            // Remove post from state.
            return state.filter(post => post.id !== action.post.id);
        // Get post detail
        case GET_POST_DETAIL:
            if (!state.length) {
                return state.concat(action.post);
            }
            return state.filter(post => post.id === action.post.id);
        case GET_ALL_POSTS:
        case GET_POSTS_BY_CATEGORY:
            return posts;
        default:
            return state;
    }
}
