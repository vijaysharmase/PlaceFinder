import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import SearchReducer from './SearchReducer';

const reducerCollection = combineReducers({
    routing: routing,
    search: SearchReducer
});

export default reducerCollection;
