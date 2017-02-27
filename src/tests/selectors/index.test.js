import { filteredEventsSelector } from '../../selectors/filter';

describe('filteredEventsSelector', () => {
  const eventsById = {
    1: { type: 'gig', venue: 'A place, Manchester', title: 'event' },
    2: { type: 'conference', title: 'Glow In The'},
    3: { type: 'gig'}
  };
  const events = [1,2,3];
  const mockState = { eventsById, events };
  it('returns correct ids for gig filter', () => (
    expect(filteredEventsSelector(
      {
        ...mockState,
        filters: { type: 'gig' }
      }
    )).toEqual([1,3])
  ));

  it('returns correct ids for location filter', () => (
    expect(filteredEventsSelector(
      {
        ...mockState,
        filters: { location: 'Manchester' }
      }
    )).toEqual([1])
  ));

  it('returns correct ids for title search filter', () => (
    expect(filteredEventsSelector(
      {
        ...mockState,
        filters: { titleSearch: 'Glow' }
      }
    )).toEqual([2])
  ));

  it('returns all ids when no filters', () => (
    expect(filteredEventsSelector(
      {
        ...mockState, filters: {}
      }
    )).toEqual([1,2,3])
  ));
});
