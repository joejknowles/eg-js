import { eventsSelector, typeSelector, currentTypeFilter } from '../reducers';

export const eventsFilteredByType = (state, events) => {
  const typeFilter = currentTypeFilter(state);
  if (!typeFilter) {
    return events;
  }
  const newList = [];
  events.forEach(id => {
    if(typeSelector(state, id) === typeFilter) {
      newList.push(id)
    }
  })
  return newList;
}

export const filteredEventsSelector = (state) => {
  let events = eventsSelector(state);
  events = eventsFilteredByType(state, events);
  return events;
};
