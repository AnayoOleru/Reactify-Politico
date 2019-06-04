import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import { createLogger} from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
const middleware = [thunk];

middleware.push(loggerMiddleware);
const  store = createStore(
 rootReducer,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
