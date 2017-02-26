import { watchEventDetailsRequests, fetchEventDetails } from '../../sagas';

import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchEventsSuccess } from '../../actions';
import * as apiClients from '../../apiClients';

it('watchEventDetailsRequests', () => (
  expect(watchEventDetailsRequests().next().value).toEqual(
    takeEvery('FETCH_EVENT_DETAILS_REQUEST', fetchEvents)
  )
));

describe('fetchEventDetails saga', () => {
  const mockId = '10900'
  const gen = fetchEvents(mockId);

  it('calls fetchEventDetails apiClient', () => {
    expect(gen.next().value).toEqual(
      call(apiClients.fetchEventDetails, mockId)
    );
  });

  it('puts fetchEventDetails response', () => {
    expect(gen.next({ response: [] }).value).toEqual(
      put(fetchEventsSuccess({ response: [] }))
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});
