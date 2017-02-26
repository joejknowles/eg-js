import React from 'react';
import format from 'date-fns/format';

export default ({
    url, type, unixdate, information_title, information_description
}) => (
  <span>
    <ul>
      <li>{ format(unixdate, 'hh:mm A') }</li>
      <li><a href={ url }>View on Ticket Arena</a></li>
      <li>type: { type }</li>
    </ul>
    <h4>
      { information_title }
    </h4>
    <div dangerouslySetInnerHTML={ { __html: information_description } } />
  </span>
);
