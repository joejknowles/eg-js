import React, { Component } from 'react';

import Listing from './listing';
import { fetchEvents } from '../apiClients';

export default class Events extends Component {
  constructor(props) {
    super(props)
    this.state = { events: [] };
  }

  componentDidMount() {
    fetchEvents().then((json) => {
      this.setState({ events: json });
    });
  }

  render() {
    return (
      <div className="events-list">
        { this.state.events.map(Listing) }
      </div>
    );
  }
}
