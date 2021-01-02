import {combineReducers} from 'redux';
import allPlacesReducer from './allPlacesReducer';
import searchReducer from './searchReducer';
import showReducer from './showReducer';
import loadingReducer from './loadingReducer';
import bookTourReducer from './bookTourReducer';
import feedbackReducer from './feedbackReducer';


const rootReducer = combineReducers({
    searchReducer,
    showReducer,
    allPlacesReducer,
    loadingReducer,
    bookTourReducer,
    feedbackReducer
});

export default rootReducer;