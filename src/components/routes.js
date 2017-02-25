import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Events from './events';

export default (props) => (
    <Router history={browserHistory} >
      <Route path="/" component={ Events } />
    </Router>
);
