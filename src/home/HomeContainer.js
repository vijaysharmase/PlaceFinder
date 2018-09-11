import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
//import Utils from '../common/components/UtilsComponent';

const mapStateToProps = (state, routeProps) => {
    return {
        // triggeringItem: Utils.getSelectedItem(Utils.getSelectedItem(state.mainMenuList).mainMenuItems),
        // searchItems: state.searchItems,
        routing: state.routing,
        routeProps: routeProps
    };
};

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
