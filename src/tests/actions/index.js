import { fetchEventsSuccess } from '../../actions';

describe('fetchEventsSuccess', () => {
  it('creates action', () => {
    const rawResponse = [
      { id: '123' }
    ];
    const expectedResponse = {
      entities: {
        events: {
          '123': { id: '123'}
        }
      },
      result: ['123']
    };
    expect(fetchEventsSuccess(rawResponse)).toEqual({
      type: 'FETCH_EVENTS_SUCCESS',
      response: expectedResponse
    })
  });
});
