import React from 'react';
import { connect } from 'react-redux';

export const Filters = (props) => (
  <div className='Filters'>
    <select onChange={ event => props.onTypeFilterChange(event.target.value) } >
      <div></div>
    </select>
  </div>
);

const mapStateToDispatch = (dispatch) => ({
  onTypeFilterChange: (filter) => dispatch({ type: 'SET_TYPE_FILTER', filter})
});

export default connect(undefined, mapStateToDispatch)(Filters);
