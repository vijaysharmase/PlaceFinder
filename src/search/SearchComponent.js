import React from 'react';
import { FormControl, Icon, Input, InputAdornment } from '@material-ui/core';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Constants from '../helpers/Constants';
import SearchActions from '../common/actions/SearchActions';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        document.title = Constants.PageTitleConstants.SEARCH;

        this.state = {
            address: '',
            errorMessage: '',
            latitude: null,
            longitude: null,
            isGeocoding: false,
        };
    }

    //#region React life cycle methods

    //#endregion

    handleChange = address => {
        this.setState({
            address,
            latitude: null,
            longitude: null,
            errorMessage: ''
        });
    };

    handleSelect = address => {
        this.setState({
            isGeocoding: true,
            address: address
        });

        geocodeByAddress(address)
            .then(res => {
                getLatLng(res[0])
                    .then(({ lat, lng }) => {
                        this.setState({
                            latitude: lat,
                            longitude: lng,
                            isGeocoding: false,
                        }, () => {
                            this.props.dispatch(SearchActions.dispatchSearchSelected({...res[0], latitude: lat, longitude: lng}))
                                .then(() => {
                                    console.log("location saved in store")
                                });
                        });
                    });
            })
            .catch(error => {
                this.setState({
                    isGeocoding: false
                });
                console.log('error', error); // eslint-disable-line no-console
            });

    };

    handleCloseClick = () => {
        this.setState({
            address: '',
            latitude: null,
            longitude: null,
        });
    };

    handleError = (status, clearSuggestions) => {
        console.log('Error from Google Maps API', status); // eslint-disable-line no-console
        this.setState({ errorMessage: status }, () => {
            clearSuggestions();
        });
    };

    render() {
        const {
            address,
            errorMessage,
            latitude,
            longitude,
            isGeocoding,
        } = this.state;

        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h5 className="header center orange-text">Search Near By Places</h5>
                        <div className="row">
                            <PlacesAutocomplete
                                value={this.state.address}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                                onError={this.handleError}
                                shouldFetchSuggestions={this.state.address.length > 2}>
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div className="search-bar-container">
                                        <div className="search-input-container">
                                            <FormControl fullWidth>
                                                <Input id="search-places"
                                                    classes={{ input: "browser-default" }}
                                                    startAdornment={<InputAdornment position="start">
                                                        <Icon>search</Icon>
                                                    </InputAdornment>}
                                                    {...getInputProps({
                                                        placeholder: 'Search Places ...',
                                                    })} />
                                                {address.length > 0 && (<button className="clear-button browser-default" onClick={this.handleCloseClick}>x</button>)}
                                            </FormControl>
                                        </div>
                                        <div className="autocomplete-dropdown-container">
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active ? 'suggestion-item active' : 'suggestion-item';
                                                return (
                                                    <div {...getSuggestionItemProps(suggestion, { className })}>
                                                        <strong>
                                                            {suggestion.formattedSuggestion.mainText}
                                                        </strong>{' '}
                                                        <small>
                                                            {suggestion.formattedSuggestion.secondaryText}
                                                        </small>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                        </div>
                        <div className="row center">
                            {errorMessage.length > 0 && (
                                <div className="error-message">{errorMessage}</div>)
                            }
                            {((latitude && longitude) || isGeocoding) && (
                                <div>
                                    <h3 className="geocode-result-header">Geocode result</h3>
                                    {isGeocoding ? (<div><i className="fa fa-spinner fa-pulse fa-3x fa-fw spinner" /></div>) :
                                        (
                                            <div>
                                                <div className="geocode-result-item--lat">
                                                    <label>Latitude:</label>
                                                    <span>{latitude}</span>
                                                </div>
                                                <div className="geocode-result-item--lng">
                                                    <label>Longitude:</label>
                                                    <span>{longitude}</span>
                                                </div>
                                            </div>
                                        )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComponent;