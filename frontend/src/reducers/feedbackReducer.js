import {POST_FEEDBACK_SUCCESS} from '../types';


const feedbackReducer = (state = false, action) => {
    switch (action.type) {
        case POST_FEEDBACK_SUCCESS:
            return !state;
        default:
            return state;
    }
}

export default feedbackReducer;