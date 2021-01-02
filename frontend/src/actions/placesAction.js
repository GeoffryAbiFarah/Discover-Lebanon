import {REQUEST_ALL_PLACES, RECEIVE_ALL_PLACES} from '../types';

export const requestAll = () => {
    return({
        type: REQUEST_ALL_PLACES
    })
}

export const receiveAll= (data) => {
    return({
        type: RECEIVE_ALL_PLACES,
        data: data
    })
}