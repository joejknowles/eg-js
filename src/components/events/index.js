import React, { Component } from 'react';
import { connect } from 'react-redux';

import Listing from '../listing';
import Filters from './filters';
import LoadingIndicator from '../loadingIndicator';
import { eventsFirstLoadingSelector } from '../../reducers';
import { createFilteredEventsSelector } from '../../selectors/filter'

export class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { props } = this;
    if (props.eventsLoading) return (<LoadingIndicator />);
    return (
      <div className="events-list">
        <Filters />
        {
          props.events.length < 1 ?
            <p className="no-events-msg">No Events Found</p>
              :
            props.events.map(
              id => <Listing id={ id } key={ id } />
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const filteredEventsSelector = createFilteredEventsSelector();
  return (state) => ({
    events: filteredEventsSelector(state),
    eventsLoading: eventsFirstLoadingSelector(state)
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch({ type: "FETCH_EVENTS_REQUEST" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
