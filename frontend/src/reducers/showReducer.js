import {SHOW_ALL_PLACES,SHOW_SEARCHED_PLACES} from '../types';

const   INITIAL_STATE = true;

const showReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_ALL_PLACES:
            return true;
        case SHOW_SEARCHED_PLACES:
            return false;
        default:
            return state;
    }
}

export default showReducer