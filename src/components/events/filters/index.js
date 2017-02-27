import React from 'react';
import { connect } from 'react-redux';

import { FilterDropDown } from './dropDown'
import {
  setTypeFilter,
  setLocationFilter,
  createThrottledTitleSearch
} from '../../../actions'

const typeOptions = [
  'gig',
  'other'
];

const locationOptions = [
  'Manchester',
  'Ibiza'
];

export const Filters = (props) => (
  <div className='Filters'>
    <FilterDropDown
      name="type"
      options={ typeOptions }
      onChange={ props.onTypeFilterChange }/>
    <FilterDropDown
      name="location"
      options={ locationOptions }
      onChange={ props.onLocationFilterChange }/>
    <input placeholder="search..."
      onChange={ (e) =>  props.onTitleSearchChange(e.target.value) }
    />
  </div>
);

const mapStateToDispatch = (dispatch) => {
  return {
    onTypeFilterChange: (filter) => dispatch(setTypeFilter(filter)),
    onLocationFilterChange: (filter) => dispatch(setLocationFilter(filter)),
    onTitleSearchChange: createThrottledTitleSearch(dispatch)
  }
};

export default connect(undefined, mapStateToDispatch)(Filters);
