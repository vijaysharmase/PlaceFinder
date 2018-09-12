import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <nav className="light-blue lighten-1">
                <div className="nav-wrapper container">
                    <Link to="/home" className="brand-logo">Place Finder</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                    <ul id="nav-mobile" className="sidenav">
                        <li><Link to="/home">Navbar Link</Link></li>
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                    <Link to="#" data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default withRouter(HeaderComponent);
