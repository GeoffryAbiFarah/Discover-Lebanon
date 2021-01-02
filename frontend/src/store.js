import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { watchAll, watchBookTour, watchFeedback, watchSearch } from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(watchAll);
sagaMiddleware.run(watchSearch);
sagaMiddleware.run(watchBookTour);
sagaMiddleware.run(watchFeedback);


export default store;