import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import getReducer from './getReducer';
import editReducer from './editReducer';
import deleteReducer from './deleteReducer';

export default combineReducers({
auth :authReducer,
posts: postReducer,
get: getReducer,
edit: editReducer,
drop: deleteReducer,
});
