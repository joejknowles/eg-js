import React, { Component } from 'react';
import './App.css';

import Listing from './components/listing';
import { fetchEvents } from './apiClients';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { events: [] };
  }

  componentDidMount() {
    fetchEvents().then((json) => {
      this.setState({ events: json });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>eg Tech Test</h2>
        </div>
        <ul className="events-list">
          { this.state.events.map(Listing) }
        </ul>
      </div>
    );
  }
}

export default App;
