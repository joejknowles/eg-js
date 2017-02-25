import React from 'react';

export default (props) => (
    <div key={ props.id }>
      <h3>{ props.title }</h3>
      <p>
        { props.date }, at { props.venue }
      </p>
      <img src={ props.image } className="event-image" alt="event" />
    </div>
);
