import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Events from './events';
import EventDetails from './eventDetails';
import NotFound from './404';

export default () => (
    <Router history={browserHistory} >
      <Route path="/" component={ Events } />
      <Route path="/event/:id" component={ EventDetails } />
      <Route path="*" component={ NotFound } />
    </Router>
);
