import React from 'react';
import { browserHistory } from 'react-router';

export default ({ children }) => (
  <div className="App">
    <div className="App-header">
      <h2><a onClick={ () => browserHistory.push('/') } style={ { cursor: 'pointer' } }>
        EG Tech Test
      </a></h2>
    </div>
    <div className="content">
      { children }
    </div>
  </div>
);
