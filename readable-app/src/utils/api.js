import axios from 'axios'

const apiUrl = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:3001'
let token = localStorage.token

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

export const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token
    }
})


export function apiGET(url, actionHandler) {
    return dispatch =>
        api
            .get(url)
            .then(response => response.data)
            .then(data => dispatch(actionHandler(data)), error => console.error(error))
}


export function apiPOST(url, data, actionHandler) {
    return dispatch =>
        api
            .post(url, data)
            .then(response => response.data)
            .then(data => dispatch(actionHandler(data)), error => console.error(error))
}


export function apiPUT(url, data, actionHandler) {
    return dispatch =>
        api
            .put(url, data)
            .then(response => response.data)
            .then(data => dispatch(actionHandler(data)), error => console.error(error))
}


export function apiDELETE(url, actionHandler) {
    return dispatch =>
        api
            .delete(url)
            .then(response => response.data)
            .then(data => dispatch(actionHandler(data)), error => console.error(error))
}

export default api