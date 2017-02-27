import React from 'react';
import { connect } from 'react-redux';

import { FilterDropDown } from './dropDown'
import {
  setTypeFilter,
  setLocationFilter,
  createThrottledTitleSearch
} from '../../../actions';

import { typeFilter, locationFilter, titleSearch } from '../../../reducers';

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
    <FilterDropDown selected={ props.type }
      name="type"
      options={ typeOptions }
      onChange={ props.onTypeFilterChange }/>
    <FilterDropDown selected={ props.location }
      name="location"
      options={ locationOptions }
      onChange={ props.onLocationFilterChange }/>
    <input placeholder="search..." value={ props.titleSearch }
      onChange={ (e) =>  props.onTitleSearchChange(e.target.value) }
    />
  </div>
);

const mapStateToProps = (state) => ({
  type: typeFilter(state),
  location: locationFilter(state),
  titleSearch: titleSearch(state)
});

const mapStateToDispatch = (dispatch) => {
  return {
    onTypeFilterChange: (filter) => dispatch(setTypeFilter(filter)),
    onLocationFilterChange: (filter) => dispatch(setLocationFilter(filter)),
    onTitleSearchChange: createThrottledTitleSearch(dispatch)
  }
};

export default connect(mapStateToProps, mapStateToDispatch)(Filters);
