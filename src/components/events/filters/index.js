import React from 'react';
import { connect } from 'react-redux';

import { FilterDropDown } from './dropDown'
import {
  setTypeFilter,
  setLocationFilter,
  setTitleSearch
} from '../../../actions';

import { typeFilter, locationFilter, titleSearch, typeOptions, locationOptions } from '../../../reducers';

export const Filters = (props) => (
  <div className='Filters'>
    <FilterDropDown selected={ props.type }
      name="type"
      options={ props.typeOptions }
      onChange={ props.onTypeFilterChange }/>
    <FilterDropDown selected={ props.location }
      name="location"
      options={ props.locationOptions }
      onChange={ props.onLocationFilterChange }/>
    <input placeholder="search..." value={ props.titleSearch }
      onChange={ (e) =>  props.onTitleSearchChange(e.target.value) }
    />
  </div>
);

const mapStateToProps = (state) => ({
  type: typeFilter(state),
  location: locationFilter(state),
  titleSearch: titleSearch(state),
  typeOptions: typeOptions(state),
  locationOptions: locationOptions(state)
});

const mapStateToDispatch = (dispatch) => {
  return {
    onTypeFilterChange: (filter) => dispatch(setTypeFilter(filter)),
    onLocationFilterChange: (filter) => dispatch(setLocationFilter(filter)),
    onTitleSearchChange: (term) => dispatch(setTitleSearch(term))
  }
};

export default connect(mapStateToProps, mapStateToDispatch)(Filters);
