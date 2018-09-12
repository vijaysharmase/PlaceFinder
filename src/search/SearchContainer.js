import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchComponent from './SearchComponent';
//import Utils from '../common/components/UtilsComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        history: ownProps.history,
        location: state.routing.locationBeforeTransitions ? state.routing.locationBeforeTransitions : ownProps.location,
        match: ownProps.location,
        staticContext: ownProps.staticContext,
        routing: state.routing
    };
};

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
};

const SearchContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchComponent));

export default SearchContainer;
