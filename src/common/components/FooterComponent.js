import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="page-footer orange">
                <div className="container">
                    <div className="row">
                        <div className="col l9 s12">
                            <h5 className="white-text">About Us</h5>
                            <p className="grey-text text-lighten-4">Place Finder is the best app for the users, it makes very easy to find HOTELS, ATMS, MEDICALS, RESTAURANTS and more. Place finder allows you to save, search and share your favorite places.</p>
                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><Link to="/home" className="white-text">Home</Link></li>
                                <li><Link to="/search" className="white-text">Search Places</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Made by Vijay Sharma
                    </div>
                </div>
            </footer>
        );
    }
}

export default withRouter(FooterComponent);