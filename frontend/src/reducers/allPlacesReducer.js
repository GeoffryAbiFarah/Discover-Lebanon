import {RECEIVE_ALL_PLACES} from '../types';


const   INITIAL_STATE = [];

const allPlacesReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVE_ALL_PLACES:
            return action.data;
        default:
            return state;
    }
}

export default allPlacesReducer;