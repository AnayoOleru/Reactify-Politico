import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import getReducer from './getReducer';

export default combineReducers({
auth :authReducer,
posts: postReducer,
get: getReducer,
});
