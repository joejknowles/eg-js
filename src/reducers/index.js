import { combineReducers } from 'redux';

export const eventsById = (state = {}, action) => {
  if (action.type === 'FETCH_EVENTS_SUCCESS') {
    return action.response.entities.events;
  }
  return state;
};

export const events = (state = [], action) => {
  if (action.type === 'FETCH_EVENTS_SUCCESS') {
    return action.response.result;
  }
  return state;
};

export const eventsSelector = (state) => state.events;

export const createEventSelector = (id) => (state) => state.eventsById[id];

export default combineReducers({ eventsById, events });
