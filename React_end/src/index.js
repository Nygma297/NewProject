import React from 'react';
import ReactDOM from 'react-dom';
import { App, Home, Register, Login } from './App';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Register} />
      <Route path="Event" component={Event} />
      <Route path="Login" component={Login} />
      <Route path="Register" component={Register} />
    </Route>
  </Router>

), document.getElementById('root'));