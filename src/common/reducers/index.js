import { combineReducers } from 'redux';
import RouteReducer from './RouteReducer';

const reducerCollection = combineReducers({
    routing: RouteReducer
});

export default reducerCollection;
