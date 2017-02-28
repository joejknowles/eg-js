import React, { Component } from 'react';
import { connect } from 'react-redux';

import Details from './details';
import EventImage from '../eventImage';

import { createEventSelector } from '../../reducers';
import { fetchEventDetailsRequest } from '../../actions';

export class EventDetails extends Component {
  componentDidMount() {
    this.props.fetchEventDetails();
  }

  render() {
    const props = this.props;
    return (
      <div key={ props.id } className="event-details">
        <EventImage url={ props.image } />
        <div className="event-info">
          <h2 className="event-title" dangerouslySetInnerHTML={ { __html: props.title } }/>
          <Details { ...props } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { params: { id } }) => (
  createEventSelector(id)
);

const mapStateToDispatch = (dispatch, { params: { id } }) => ({
  fetchEventDetails: () => dispatch(fetchEventDetailsRequest(id))
});

export default connect(mapStateToProps, mapStateToDispatch)(EventDetails);
