import {LOADING} from '../types';

export const loadingAction = (value) => {
    return({
        type: LOADING,
        value: value
    })
}