import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import { createLogger} from 'redux-logger';
import rootReducer from './reducers';

const initialState = {
    posts:{
        items: [],
        item: {},
        sucess:false
    }
};
const loggerMiddleware = createLogger();
const middleware = [thunk];

middleware.push(loggerMiddleware);
const  store = createStore(
 rootReducer,
 initialState,
 composeWithDevTools(applyMiddleware(...middleware))
);

// eslint-disable-next-line no-console
console.log('2');
export default store;
