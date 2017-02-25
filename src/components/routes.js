import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Events from './events';
import NotFound from './404';

export default () => (
    <Router history={browserHistory} >
      <Route path="/" component={ Events } />
      <Route path="*" component={ NotFound } />
    </Router>
);
