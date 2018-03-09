import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from './reducers';

// Our Middleware
const middleWare = applyMiddleware(thunk, promise, logger);
//Our Store
const Store = createStore(RootReducer, middleWare);

export default Store;
