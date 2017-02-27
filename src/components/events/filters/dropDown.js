import React from 'react';

export const FilterDropDown = (props) => (
  <select onChange={ event => props.onChange(event.target.value) } >
    <option key='all' value=''>Any { props.name }</option>
    { props.options.map(
      t => <option
        key={ t }
        value={ t }>
        { t }</option>
    ) }
  </select>
);
