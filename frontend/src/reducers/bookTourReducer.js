import {POST_BOOK_TOUR_SUCCESS} from '../types';


const bookTourReducer = (state = false, action) => {
    switch (action.type) {
        case POST_BOOK_TOUR_SUCCESS:
            return !state;
        default:
            return state;
    }
}

export default bookTourReducer;