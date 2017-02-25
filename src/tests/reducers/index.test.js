import { eventsById, events } from '../../reducers';

describe('eventsById', () => {
  it('returns empty object by default', () => (
    expect(eventsById(undefined, {})).toEqual({})
  ));

  it('returns events on fetch success', () => {
    const events = { '125': { id: '125' } };
    const actual = eventsById(undefined, {
      type: 'FETCH_EVENTS_SUCCESS',
      response: { entities: { events }}
    });
    expect(actual).toEqual(events);
  });
});

describe('events', () => {
  it('returns empty array by default', () => (
    expect(events(undefined, {})).toEqual([])
  ));

  it('returns events on fetch success', () => {
    const result = [ '123', '316' ];
    const actual = events(undefined, {
      type: 'FETCH_EVENTS_SUCCESS',
      response: { result }
    })
    expect(actual).toEqual(result);
  });
});
