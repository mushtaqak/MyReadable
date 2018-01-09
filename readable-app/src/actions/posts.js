import { apiGET, apiPOST, apiPUT, apiDELETE } from '../utils/api'

export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const GET_POST_DETAIL = 'GET_POST_DETAIL'
export const SORT_POSTS = 'SORT_POSTS'


export function votePost(postId, vote) {
    return apiPOST(`/posts/${postId}`, { option: vote }, votePostAction);
}


export function deletePost(postId) {
    return apiDELETE(`/posts/${postId}`, deletePostAction);
}


export function editPost(postId, post) {
    return apiPUT(`/posts/${postId}`, post, editPostAction);
}


export function addPost(post) {
    return apiPOST(`/posts`, post, addPostAction);
}


export function getPostDetail(postId) {
    return apiGET(`/posts/${postId}`, getPostDetailAction);
}


export function getPosts() {
    return apiGET('/posts', getPostsAction);
}


export const getCategoryPosts = (category) => {
    return apiGET(category + '/posts', getCategoryPostsAction);
}


function addPostAction(post) {
    return {
        type: ADD_POST,
        post
    }
}


function editPostAction(post) {
    return {
        type: EDIT_POST,
        post
    }
}


function deletePostAction(post) {
    return {
        type: DELETE_POST,
        post
    }
}


function votePostAction(post) {
    return {
        type: VOTE_POST,
        post
    }
}


function getPostDetailAction(post) {
    return {
        type: GET_POST_DETAIL,
        post
    }
}


function getPostsAction(posts) {
    return {
        type: GET_ALL_POSTS,
        posts
    }
}


const getCategoryPostsAction = (posts) => {
    return {
        type: GET_POSTS_BY_CATEGORY,
        posts
    }
}


export const sortPosts = (sortBy) => {
    return {
        type: SORT_POSTS,
        sortBy
    }
}
