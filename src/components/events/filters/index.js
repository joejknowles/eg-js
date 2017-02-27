import React from 'react';
import { connect } from 'react-redux';
import throttle from 'lodash.throttle';

import { FilterDropDown } from './dropDown'

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
      onChange={ (e) => {
        const value = e.target.value;
        value.length > 2 && props.onTitleSearch(value);
      } }
    />
  </div>
);

const mapStateToDispatch = (dispatch) => ({
  onTypeFilterChange: (filter) => dispatch({ type: 'SET_TYPE_FILTER', filter}),
  onLocationFilterChange: (filter) => dispatch({ type: 'SET_LOCATION_FILTER', filter}),
  onTitleSearch: (term) => throttle(dispatch({ type: 'SET_TITLE_SEARCH', term}))
});


export default connect(undefined, mapStateToDispatch)(Filters);
