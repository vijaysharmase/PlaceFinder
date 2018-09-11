import { browserHistory } from 'react-router';
import Constants from '../../helpers/Constants';

const RouteReducer = (state = {}, action) => {
    let location = {}, pathname = '', search = '';
    switch (action.type) {
        case Constants.PUSH_URL_TO_BROWSER:
            location = state.locationBeforeTransitions;
            pathname = action.payload.path;
            search = action.payload.locationSearch === undefined ? '' : action.payload.locationSearch;

            //cases where the URL should have search param(s) and either they are incorrect format (using browser) or didn't provide within the URL (using browser/navigation)
            //replace the incorrect URL with corrected ones
            if (action.payload.wasEnteredURLInvalid !== undefined && action.payload.wasEnteredURLInvalid !== null && action.payload.wasEnteredURLInvalid) {
                browserHistory.replace((pathname) + (search !== '' ? search : ''));
                return state;
            }

            //cases where the URL has search params and changing params values using search
            if (action.payload.hasSearchParam !== undefined && action.payload.hasSearchParam !== null && action.payload.hasSearchParam) {
                location = { ...location, pathname, search, action: 'PUSH' };
                return { ...state, locationBeforeTransitions: location };
            }

            //cases where the URL doesn't have search param, Link to property will automatically manage that, no need to push again
            return state;
        case Constants.LOCATION_CHANGE:
            return { ...state, locationBeforeTransitions: action.payload }
        default:
            return state;
    }
}

export default RouteReducer;