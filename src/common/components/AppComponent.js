import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import NotFoundComponent from './NotFoundComponent';
import HomeContainer from '../../home/HomeContainer';

class AppComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route path='/home' component={HomeContainer} />
          <Route path='*' component={NotFoundComponent} />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default withRouter(AppComponent);