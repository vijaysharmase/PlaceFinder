import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomeComponent from './HomeComponent';
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

const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));

export default HomeContainer;
