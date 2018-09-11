import Constants from '../helpers/Constants';

let pushURLToBrowser=(payload)=> {
    return {
        type: Constants.PUSH_URL_TO_BROWSER,
        payload
    };
};

let browserLocationChange = (payload) => {
    return {
        type: Constants.BROWSER_LOCATION_CHANGE,
        payload
    };
};

const RouterActions = {
    pushURLToBrowser: pushURLToBrowser,
    browserLocationChange: browserLocationChange
}

export default RouterActions;