import Constants from '../../helpers/Constants';

let searchSelected = (payload) => {
    return {
        type: Constants.SEARCH_SELECTED,
        payload
    }
};

let dispatchSearchSelected = (payload) => {
    return function (dispatch) {
        dispatch(searchSelected(payload))
        return Promise.resolve(payload);
    };
};

const SearchActions = {
    searchSelected: searchSelected,
    dispatchSearchSelected: dispatchSearchSelected
}

export default SearchActions;