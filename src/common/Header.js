import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav class="light-blue lighten-1" role="navigation">
                <div class="nav-wrapper container">
                    <span class="brand-logo">Place Finder</span>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <ul id="nav-mobile" class="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger">
                        <i class="material-icons">menu</i>
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;
