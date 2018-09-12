import React, { Component } from 'react';

class PlacesComponent extends Component {
    render() {
        return (
            <div>
                <h4>Places Searched</h4>
                <ul>
                    {this.props.searchItems.map((item) => {
                        return (<li key={item.place_id}>Address: {item.formatted_address}, Latitude: {item.latitude}, Longitude: {item.longitude}</li>);
                    })}
                </ul>
            </div>
        )
    }
}

export default PlacesComponent;