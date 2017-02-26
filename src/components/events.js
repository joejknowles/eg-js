import React, { Component } from 'react';
import { connect } from 'react-redux';

import Listing from './listing';
import { eventsSelector } from '../reducers'

export class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div className="events-list">
        {
          this.props.events.map(
            id => <Listing id={ id } key={ id } />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: eventsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch({ type: "FETCH_EVENTS_REQUEST" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
