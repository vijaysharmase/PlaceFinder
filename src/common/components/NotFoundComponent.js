import { Component } from 'react';

class NotFoundComponent extends Component {
    componentWillMount() {       
        window.location.pathname = 'placefinder';
    }
    
}
export default NotFoundComponent;