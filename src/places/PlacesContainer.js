import { connect } from 'react-redux';
import PlacesComponent from './PlacesComponent';

const mapStateToProps = (state) => {
    return {
        searchItems: state.search || []
    };
};

const PlacesContainer = connect(mapStateToProps)(PlacesComponent);

export default PlacesContainer;
