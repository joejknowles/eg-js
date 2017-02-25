import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Listing from './components/listing';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { events: [] };
  }

  componentDidMount() {
    const apiBaseUrl = process.env.NODE_ENV === 'production' ? '/events' : '';
    fetch(apiBaseUrl + '/events/').then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({ events: json });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>eg Tech Test</h2>
        </div>
        <ul className="App-intro">
          { this.state.events.map(Listing) }
        </ul>
      </div>
    );
  }
}

export default App;
