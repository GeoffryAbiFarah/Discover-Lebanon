import {put, takeLatest, call} from 'redux-saga/effects';
import { bookTourSuccessAction } from '../actions/bookTourAction';
import { errorAction } from '../actions/errorAction';
import { loadingAction } from '../actions/loadingAction';
import { receiveAll } from '../actions/placesAction';
import { receiveSearch } from '../actions/searchAction';
import { sendFeedbackSuccessAction } from '../actions/sendFeedback';
import {fetchDataAll, fetchDataNameTypeArea, fetchDataNameType, fetchDataNameArea, fetchDataTypeArea,
    fetchDataName, fetchDataType, fetchDataArea, postAreaTour, postFeedback} from '../api';
import { POST_BOOK_TOUR, POST_FEEDBACK, REQUEST_ALL_PLACES, REQUEST_SEARCHED_PLACES } from '../types';


//post feedback
function* feedbackAsync(action){
    try {
        yield call (postFeedback,action.data);
        yield put(sendFeedbackSuccessAction);
    }
    catch (e){
        console.log("Caught the error :"+e)
        yield put(errorAction("Error addingfeedback!"))
    }
}

export function* watchFeedback(){
    yield takeLatest(POST_FEEDBACK, feedbackAsync);
}


//post Area Tour
function* bookTourAsync(action){
    try {
        console.log("BEFORE POSTINGGGG")
        yield call (postAreaTour,action.data);
        console.log("POSTEDDDDD")
        yield put(bookTourSuccessAction);
        console.log("AFTER SUCCESS")

    }
    catch (e){
        console.log("Caught the error :"+e)
        yield put(errorAction("Error adding area tour!"))
    }
}

export function* watchBookTour(){
    yield takeLatest(POST_BOOK_TOUR, bookTourAsync);
}


// All places
function* allAsync(action){
    try {
        yield put(loadingAction(true));
        const allPlaces = yield call (fetchDataAll);
        yield put(receiveAll(allPlaces));
        yield put(loadingAction(false));
    }
    catch (e){
        console.log("Caught the error :" + e)
        yield put(loadingAction(false));
        yield put(errorAction("Error fetching places !"))
    }
}

export function* watchAll(){
    yield takeLatest(REQUEST_ALL_PLACES, allAsync);
}

//Search places
function* searchAsync(action){
    try {
        let searched = [];
        yield put(loadingAction(true));
        if (action.data.name === "" && action.data.type === "" && action.data.area !== ""){
        searched = yield call (fetchDataArea,action.data);
        }
        else if (action.data.name === ""  && action.data.type !== "" && action.data.area === ""){
            searched = yield call (fetchDataType,action.data);
        }
        else if (action.data.name !== ""  && action.data.type === "" && action.data.area === ""){
            searched = yield call (fetchDataName,action.data);
        }
        else if (action.data.name === "" && action.data.type !== "" && action.data.area !== ""){
        searched = yield call (fetchDataTypeArea,action.data);
        }
        else if (action.data.name !== "" && action.data.type === "" && action.data.area !== ""){
            searched = yield call (fetchDataNameArea,action.data);
        }
        else if (action.data.name !== "" && action.data.type !== "" && action.data.area === ""){
            searched = yield call (fetchDataNameType,action.data);
        }
        else{
        searched = yield call (fetchDataNameTypeArea ,action.data);
        }

        yield put(receiveSearch(searched));
        yield put(loadingAction(false));

    }catch (e){
        console.log("Caught the error :"+e)
        yield put(loadingAction(false));
        yield put(errorAction("Error fetching restaurants !"))
    }
}

export function* watchSearch(){
    yield takeLatest(REQUEST_SEARCHED_PLACES, searchAsync);
}

