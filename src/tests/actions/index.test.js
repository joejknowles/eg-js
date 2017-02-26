import { fetchEventsSuccess, fetchEventDetailsRequest } from '../../actions';

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

describe('fetchEventDetailsRequest', () => {
  const mockId = "266970";
  it('creates action', () => {
    expect(fetchEventDetailsRequest(mockId)).toEqual({
      type: 'FETCH_EVENT_DETAILS_REQUEST',
      id: mockId
    })
  });
});
