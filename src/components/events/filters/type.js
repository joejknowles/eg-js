import React from 'react';

const typeOptions = [
  'all',
  'gig',
  'other'
]

export const TypeFilter = (props) => (
  <select onChange={ event => props.onChange(event.target.value) } >
    <option key='all' value=''>Select type</option>
    { typeOptions.map(
      t => <option
        key={ t }
        value={ t }>
        { t }</option>
    ) }
  </select>
);
