import {SHOW_ERROR, CLEAR_ERROR} from '../types';

export const errorAction = (message) => {
    return({
        type: SHOW_ERROR,
        message: message
    })
}

export const errorClearAction = () => {
    return({
        type: CLEAR_ERROR
    })
}