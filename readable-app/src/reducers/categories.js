import { GET_CATEGORIES } from '../actions/categories'


export function categories(state = [], action) {
    const { data } = action;
    switch (action.type) {
        case GET_CATEGORIES:
            return data.categories;
        default:
            return state;
    }
}
