import { POST_BOOK_TOUR, POST_BOOK_TOUR_SUCCESS} from '../types';

export const bookTourAction = (data) => {
    return({
        type: POST_BOOK_TOUR,
        data: data
    })
}

export const bookTourSuccessAction = () => {
    return({
        type : POST_BOOK_TOUR_SUCCESS
    })
}