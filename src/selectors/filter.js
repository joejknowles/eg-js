import {
  eventsSelector,
  typeSelector,
  typeFilter,
  titleSelector,
  locationFilter,
  titleSearch
} from '../reducers';
import { locationSelector } from '../selectors/location';
import throttle from 'lodash.throttle';

const passesFilter = (value, filter) => (filter ? value === filter : true);

const passesTypeFilter = (state, id) => (
  passesFilter(typeSelector(state, id), typeFilter(state))
)

const passesLocationFilter = (state, id) => (
  passesFilter(locationSelector(state, id), locationFilter(state))
)

const passesSearch = (value, term) => (
  term && term.length > 2 ? (value || '').includes(term) : true
);

const passesTitleSearch = (state, id) => (
  passesSearch(titleSelector(state, id), titleSearch(state))
);

const passesAllFilters = (state, id) => (
  passesTypeFilter(state, id) &&
    passesLocationFilter(state, id) &&
    passesTitleSearch(state, id)
);

export const createFilteredEventsSelector = () => (
  throttle((state) => {
    let events = eventsSelector(state);
    return [
      ...events
    ].filter(
      id => passesAllFilters(state, id)
    ).slice(0, 100);
  }, 10)
);
