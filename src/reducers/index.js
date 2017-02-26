import { combineReducers } from 'redux';
import { eventsLoading } from './loading';

export const eventsById = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS_SUCCESS':
    case 'FETCH_EVENT_DETAILS_SUCCESS':
      return {
        ...state,
        ...action.response.entities.events
      };
    default:
    return state;
  }
};

export const events = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_EVENTS_SUCCESS':
      return action.response.result;
    case 'FETCH_EVENT_DETAILS_SUCCESS':
      const newId = action.response.result;
      const idExists = state.indexOf(newId) !== -1;
      if (idExists) {
        return state;
      } else {
        return [ ...state, newId ];
      }
    default:
    return state;
  }
};

export const eventsSelector = (state) => state.events.slice(0, 100);

export const createEventSelector = (id) => (state) => (
  state.eventsById[id] || {}
);

export const eventsLoadingSelector = (state) => state.eventsLoading;

export default combineReducers({ eventsById, events, eventsLoading });
