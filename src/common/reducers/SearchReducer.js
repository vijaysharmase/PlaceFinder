import Constants from '../../helpers/Constants';

const SearchReducer = (state = [], action) => {
    switch (action.type) {
        case Constants.SEARCH_SELECTED:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default SearchReducer;