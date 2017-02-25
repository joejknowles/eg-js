import React from 'react';

export default (props) => (
    <div key={ props.id } className="event-listing">
    <img src={ props.image } className="event-image" alt="event" />
      <h3 className="event-title">{ props.title }</h3>
      <p>
        { props.date }, at { props.venue }
      </p>
    </div>
);
