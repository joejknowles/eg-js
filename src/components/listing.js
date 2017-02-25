import React from 'react';

export default (props) => (
    <li key={ props.id }>
      <h3>{ props.title }</h3>
      <p>
        { props.date }, at { props.venue }
      </p>
    </li>
);
