import { combineReducers } from 'redux'

import {categories} from './categories'
import {posts} from './posts'
import {postSortOrder} from './post-sort'
import {comments} from './comments'


export default combineReducers({
    posts,
    categories,
    postSortOrder,
    comments
})
