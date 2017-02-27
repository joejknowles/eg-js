import { eventsFilteredByType } from '../../selectors/filter';

describe('eventsFilteredByType', () => {
  const eventsById = {
    1: { type: 'gig' },
    2: {type: 'conference'},
    3: {type: 'gig'}
  };
  it('returns only ids where event is gig', () => (
    expect(eventsFilteredByType(
      {
        eventsById,
        filters: {
          type: 'gig'
        }
      }, [1,2,3]
    )).toEqual([1,3])
  ));

  it('returns all ids when no filter', () => (
    expect(eventsFilteredByType(
      {
        eventsById,
        filters: {
          type: ''
        }
      }, [1,2,3]
    )).toEqual([1,2,3])
  ));
});
