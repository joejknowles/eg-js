import { createEventSelector } from '../reducers';

export const locationFromVenue = (venue = '') => {
  const parts = venue.split(', ');
  return parts[parts.length - 1];
}

export const locationSelector = (state, id) => {
  const { venue } = createEventSelector(id)(state);
  return locationFromVenue(venue);
};
