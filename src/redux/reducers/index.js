import { combineReducers } from 'redux';
import login from './login';
import registro from './registro';

const rootReducer = combineReducers({ login, registro });

export default rootReducer;
