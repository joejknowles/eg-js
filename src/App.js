import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Layout from './components/layout';
import Routes from './components/routes';
import configureStore from './configureStore';

export default () => (
  <Layout>
    <Provider store={ configureStore() } >
      <Routes />
    </Provider>
  </Layout>
);
