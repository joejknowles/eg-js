import { watchEventsRequests, fetchEvents } from '../../sagas';

import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchEventsSuccess } from '../../actions';
import * as apiClients from '../../apiClients';

it('watchEventsRequests', () => (
  expect(watchEventsRequests().next().value).toEqual(
    takeEvery('FETCH_EVENTS_REQUEST', fetchEvents)
  )
));

describe('fetchEvents saga', () => {
  const gen = fetchEvents();

  it('calls fetchEvents apiClient', () => {
    expect(gen.next().value).toEqual(
      call(apiClients.fetchEvents)
    );
  });

  it('puts fetchEvents response', () => {
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
