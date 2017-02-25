import { EventsById, Events } from '../../reducers';

describe('EventsById', () => {
  it('returns empty object by default', () => (
    expect(EventsById(undefined, {})).toEqual({})
  ));
});

describe('Events', () => {
  it('returns empty array by default', () => (
    expect(Events(undefined, {})).toEqual([])
  ));
});
