import { combineReducers } from 'redux';

import options from './options'

export const typeReducer = (state = '', action) => {
  if (action.type === 'SET_TYPE_FILTER') {
    return action.filter;
  }
  return state
};

export const location = (state = '', action) => {
  if (action.type === 'SET_LOCATION_FILTER') {
    return action.filter;
  }
  return state
};

export const titleSearch = (state = '', action) => {
  if (action.type === 'SET_TITLE_SEARCH') {
    return action.term;
  }
  return state
};

export default combineReducers({ type: typeReducer, location, titleSearch, options });
