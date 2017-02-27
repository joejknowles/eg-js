import { combineReducers } from 'redux';

import { locationFromVenue } from '../../selectors/location';

const getUniqueValues = ({
  result, entities: { events }
}, selector) => {
  return result.reduce((accumulator, id) => {
    const value = selector(events[id]);
    if (value && !accumulator.includes(value)) {
      accumulator.push(value);
    }
    return accumulator;
  }, []);
};


const getUniqueTypes = (action) => getUniqueValues(action.response, (event) => event.type);

export const typeOptions = (state = [], action) => {
  if (action.type === 'FETCH_EVENTS_SUCCESS') {
    return getUniqueTypes(action);
  }
  return state;
};

const getUniqueLocations = (action) => (
  getUniqueValues(action.response,
    (event) => locationFromVenue(event.venue || '')
  )
);

export const locationOptions = (state = [], action) => {
  if (action.type === 'FETCH_EVENTS_SUCCESS') {
    const locations = getUniqueLocations(action);
    return locations;
  }
  return state;
};

export default combineReducers({ typeOptions, locationOptions });
