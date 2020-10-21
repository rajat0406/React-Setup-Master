import { combineReducers } from 'redux';
import login from './login';
import signUp from './signUp';

export default combineReducers({ login, signUp });