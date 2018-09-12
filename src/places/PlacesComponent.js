import React, { Component } from 'react';

class PlacesComponent extends Component {
    render() {
        return (
            <div>
                {this.props.searchItems.length > 0 && (
                    <h5 className="header center orange-text">Places Searched</h5>
                )}
                <ul style={{ textAlign: 'left' }}>
                    {this.props.searchItems.map((item, index) => {
                        return (
                            <li key={index}><b>Address:</b> {item.formatted_address}, <b>Type:</b> {item.types[0].toString().toUpperCase()}, <b>Latitude:</b> {item.latitude}, <b>Longitude:</b> {item.longitude}<br /><hr /></li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default PlacesComponent;