import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import Routes from './components/routes';
import configureStore from './configureStore';

export default () => (
  <div className="App">
    <div className="App-header">
      <h2><a onClick={ () => browserHistory.push('/') } style={ { cursor: 'pointer' } }>
        EG Tech Test
      </a></h2>
    </div>
    <div className="content">
      <Provider store={ configureStore() } >
        <Routes />
      </Provider>
    </div>
  </div>
);
