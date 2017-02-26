import { eventsLoading } from '../../reducers/loading';

describe('eventsLoading reducer', () => {
  it('defaults to false', () => (
    expect(eventsLoading(undefined, {})).toBe(false)
  ));

  it('is true after fetch events request', () => (
    expect(eventsLoading(false, { type: 'FETCH_EVENTS_REQUEST' })).toBe(true)
  ));

  it('is false after fetch events success', () => (
    expect(eventsLoading(true, { type: 'FETCH_EVENTS_SUCCESS' })).toBe(false)
  ));
})
