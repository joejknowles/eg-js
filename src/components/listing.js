import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import EventImage from './eventImage';
import { createEventSelector } from '../reducers'

export const Listing = (props) => (
  <div key={ props.id } className="event-listing">
    <EventImage url={ props.image } />
    <Link to={ `event/${ props.id }` }>
      <h3 className="event-title">{ props.title }</h3>
    </Link>
    <p>
      { props.date }, at { props.venue }
    </p>
  </div>
);

const mapStateToProps = (state, { id }) => (
  createEventSelector(id)
);

export default connect(mapStateToProps)(Listing);
