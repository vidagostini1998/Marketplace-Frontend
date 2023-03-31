import {legacy_createStore, applyMiddleware} from 'redux';
import rootReducer from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();


const store = legacy_createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? composeWithDevTools(applyMiddleware(sagaMiddleware)): applyMiddleware(sagaMiddleware) );

sagaMiddleware.run(rootSaga);

export default store;
