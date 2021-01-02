import { POST_FEEDBACK, POST_FEEDBACK_SUCCESS} from '../types';

export const sendFeedbackAction = (data) => {
    return({
        type: POST_FEEDBACK,
        data: data
    })
}

export const sendFeedbackSuccessAction = () => {
    return({
        type : POST_FEEDBACK_SUCCESS
    })
}