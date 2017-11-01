import React, { Component } from 'react';

import { HomePage, AicPage, PracticePage, StarPage } from 'components';
import { Route } from 'react-router-dom';
import { 
  ScreenMaskContainer, 
  LoginModalContainer,
  UserLoader,
  Core
 } from 'containers';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path ="/" component={HomePage}/>
        <Route path="/AicPage" component={AicPage}/>
        <Route path="/PracticePage" component={PracticePage}/>
        <Route path="/StarPage" component={StarPage}/>
        <ScreenMaskContainer/>
        <LoginModalContainer/>
        <UserLoader/>
        <Core/>
      </div>
    );
  }
}

export default App;