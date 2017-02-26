import { eventsSelector, typeSelector, currentTypeFilter } from '../reducers';

export const eventsFilteredByType = (state) => {
  const newList = [];
  const all = eventsSelector(state);
  const filterType = currentTypeFilter(state);
  if (!filterType) {
    return all;
  }
  all.forEach(id => {
    if(typeSelector(state, id) === filterType) {
      newList.push(id)
    }
  })
  return newList;
}

export const filteredEventsSelector = (state) => {
  return eventsFilteredByType(state)
};
