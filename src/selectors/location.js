import { createEventSelector } from '../reducers';

export const locationSelector = (state, id) => {
  const { venue = '' } = createEventSelector(id)(state);
  const parts = venue.split(', ');
  return parts[parts.length - 1];
};
