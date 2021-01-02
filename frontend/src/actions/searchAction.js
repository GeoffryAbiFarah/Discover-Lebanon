import {REQUEST_SEARCHED_PLACES, RECEIVE_SEARCHED_PLACES} from '../types';

export const requestSearch = (data) => {
    return({
        type: REQUEST_SEARCHED_PLACES,
        data: data
    })
}

export const receiveSearch = (data) => {
    return({
        type: RECEIVE_SEARCHED_PLACES,
        data: data
    })
}