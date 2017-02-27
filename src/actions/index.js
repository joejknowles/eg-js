import { normalize } from 'normalizr';
import { arrayOfEvents, event } from '../schema';
import throttle from 'lodash.throttle';

export const fetchEventsSuccess = (response) => ({
  type: 'FETCH_EVENTS_SUCCESS',
  response: normalize(response, arrayOfEvents)
});

export const fetchEventDetailsRequest = (id) => ({
  type: 'FETCH_EVENT_DETAILS_REQUEST',
  id
});

export const fetchEventDetailsSuccess = (response) => ({
  type: 'FETCH_EVENT_DETAILS_SUCCESS',
  response: normalize(response, event)
});

export const setTypeFilter = (filter) => ({
  type: 'SET_TYPE_FILTER', filter
});

export const setLocationFilter = (filter) => ({
  type: 'SET_LOCATION_FILTER', filter
});

export const createThrottledTitleSearch = (dispatch) => (
  throttle(
    (term) => dispatch({ type: 'SET_TITLE_SEARCH', term}),
    500
  )
);
