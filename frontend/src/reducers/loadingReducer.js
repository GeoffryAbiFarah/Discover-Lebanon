import {LOADING} from '../types';


const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case LOADING:
            return action.value;
        default:
            return state;
    }
}

export default loadingReducer;