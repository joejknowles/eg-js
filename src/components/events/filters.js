import React from 'react';

export const Filters = (props) => (
  <div className='Filters'>
    <input onChange={ event => props.onTypeFilterChange(event.target.value) } ></input>
  </div>
);
