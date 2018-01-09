import { apiGET } from '../utils/api'


export const GET_CATEGORIES = 'GET_CATEGORIES'


export const getCategories = () => {
    return apiGET('categories', getCategoriesAction);
}


function getCategoriesAction(data) {
    return {
        type: GET_CATEGORIES,
        data
    }
}
