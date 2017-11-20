import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authenticateUser from './auth';

export default combineReducers({ authenticateUser, form: formReducer });
