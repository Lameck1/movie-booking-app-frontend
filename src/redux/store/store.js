import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import signUpReducer from '../reducers/signUpReducer';
import moviesReducer from '../reducers/moviesReducer';

const reducer = combineReducers({
  signUpReducer,
  moviesReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
