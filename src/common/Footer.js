import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="page-footer orange">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">About Us</h5>
                            <p class="grey-text text-lighten-4">Place finder allows you in a single app save, search and share your favorite places.</p>
                        </div>
                        <div class="col l3 s12">
                            <h5 class="white-text">Settings</h5>
                            <ul>
                                <li><a class="white-text" href="#!">Link 1</a></li>
                            </ul>
                        </div>
                        <div class="col l3 s12">
                            <h5 class="white-text">Connect</h5>
                            <ul>
                                <li><a class="white-text" href="#!">Link 1</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        Made by Vijay Sharma
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
