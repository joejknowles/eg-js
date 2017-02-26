import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Routes from './components/routes';
import configureStore from './configureStore';

export default () => (
  <div className="App">
    <div className="App-header">
      <h2>EG Tech Test</h2>
    </div>
    <div className="content">
      <Provider store={ configureStore() } >
        <Routes />
      </Provider>
    </div>
  </div>
);
