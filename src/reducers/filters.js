import { combineReducers } from 'redux';

export const typeReducer = (state = '', action) => {
  if (action.type === 'SET_TYPE_FILTER') {
    return action.filter;
  }
  return state
};

export default combineReducers({ type: typeReducer });
