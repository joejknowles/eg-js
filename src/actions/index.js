import { normalize } from 'normalizr';
import { arrayOfEvents } from '../schema';

export const fetchEventsSuccess = (response) => ({
  type: 'FETCH_EVENTS_SUCCESS',
  response: normalize(response, arrayOfEvents)
});
