import {SORT_POSTS} from '../actions/posts'


export function postSortOrder (state = '-timestamp', action) {
    switch (action.type) {
        case SORT_POSTS:
            return action.sortBy;
        default:
            return state;
    }
}
