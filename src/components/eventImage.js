import React from 'react';

const defaultImageUrl = 'https://placehold.it/100x100?text=IMAGE';

export default ({ url }) => (
  <img
    src={ url || defaultImageUrl }
    className="event-image"
    alt="event"
  />
);
