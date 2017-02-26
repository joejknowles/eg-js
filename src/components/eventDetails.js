import React from 'react';
import { connect } from 'react-redux';

import { createEventSelector } from '../reducers'

export const EventDetails = (props) => (
  <div key={ props.id } className="event-details">
    <img src={ props.image } className="event-image" alt="event" />
    <h3 className="event-title">{ props.title }</h3>
    <p>
      { props.date }, at { props.venue }
    </p>
  </div>
);

const mapStateToProps = (state, { params: { id } }) => (
  createEventSelector(id)
);

export default connect(mapStateToProps)(EventDetails);
