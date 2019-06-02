import { combineReducers } from 'redux';
import postReducer from './postReducer';
import getReducer from './getReducer';
import editReducer from './editReducer';
import deleteReducer from './deleteReducer';

export default combineReducers({
posts: postReducer,
get: getReducer,
edit: editReducer,
drop: deleteReducer,
});
