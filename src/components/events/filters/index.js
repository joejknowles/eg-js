import React from 'react';
import { connect } from 'react-redux';

import { TypeFilter } from './type'

export const Filters = (props) => (
  <div className='Filters'>
    <TypeFilter onChange={ props.onTypeFilterChange }/>
  </div>
);

const mapStateToDispatch = (dispatch) => ({
  onTypeFilterChange: (filter) => dispatch({ type: 'SET_TYPE_FILTER', filter})
});


export default connect(undefined, mapStateToDispatch)(Filters);
