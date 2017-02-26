import React, { Component } from 'react';
import { connect } from 'react-redux';

import Listing from '../listing';
import LoadingIndicator from '../loadingIndicator';
import { eventsFirstLoadingSelector } from '../../reducers';
import { filteredEventsSelector } from '../../selectors/filter'

export class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { props } = this;
    if (props.eventsLoading) return (<LoadingIndicator />);
    return (
      <div className="events-list">
        {
          props.events.map(
            id => <Listing id={ id } key={ id } />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: filteredEventsSelector(state),
  eventsLoading: eventsFirstLoadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch({ type: "FETCH_EVENTS_REQUEST" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
