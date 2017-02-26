import React from 'react';
import { connect } from 'react-redux';

export const Filters = (props) => (
  <div className='Filters'>
    <input onChange={ event => props.onTypeFilterChange(event.target.value) } ></input>
  </div>
);

const mapStateToDispatch = (dispatch) => ({
  onTypeFilterChange: (filter) => dispatch({ type: 'SET_TYPE_FILTER', filter})
});

export default connect(undefined, mapStateToDispatch)(Filters);
