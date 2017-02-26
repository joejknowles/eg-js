import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { createEventSelector } from '../reducers'

export const Listing = (props) => (
  <div key={ props.id } className="event-listing">
    <img src={ props.image } className="event-image" alt="event" />
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
