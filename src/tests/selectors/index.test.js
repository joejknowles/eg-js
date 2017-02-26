import { eventsFilteredByType } from '../../selectors/filter';

describe('eventsFilteredByType', () => {
  it('returns only ids where event is gig', () => (
    expect(eventsFilteredByType(
      {
        events: [1,2,3],
        eventsById: {
          1: { type: 'gig' },
          2: {type: 'conference'},
          3: {type: 'gig'}
        },
        filters: {
          type: 'gig'
        }
      }
    )).toEqual([1,3])
  ));

  it('returns all ids when no filter', () => (
    expect(eventsFilteredByType(
      {
        events: [1,2,3],
        eventsById: {
          1: { type: 'gig' },
          2: {type: 'conference'},
          3: {type: 'gig'}
        },
        filters: {
          type: ''
        }
      }
    )).toEqual([1,2,3])
  ));
});
