import { Component } from 'react';

class NotFoundComponent extends Component {
    componentWillMount() {       
        window.location.pathname = 'home';
    }    
}
export default NotFoundComponent;