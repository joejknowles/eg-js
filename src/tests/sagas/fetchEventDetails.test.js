import { watchEventDetailsRequests, fetchEventDetails } from '../../sagas';

import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchEventDetailsSuccess, fetchEventDetailsFailure } from '../../actions';
import * as apiClients from '../../apiClients';

it('watchEventDetailsRequests', () => (
  expect(watchEventDetailsRequests().next().value).toEqual(
    takeEvery('FETCH_EVENT_DETAILS_REQUEST', fetchEventDetails)
  )
));

describe('fetchEventDetails saga', () => {
  const mockId = '10900'
  const gen = fetchEventDetails({ id: mockId });

  it('calls fetchEventDetails apiClient', () => {
    expect(gen.next().value).toEqual(
      call(apiClients.fetchEventDetails, mockId)
    );
  });

  it('puts fetchEventDetails response', () => {
    expect(gen.next({ response: [] }).value).toEqual(
      put(fetchEventDetailsSuccess({ response: [] }))
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});

describe('fetchEventDetails on failure', () => {
  const mockId = '10900'
  const gen = fetchEventDetails({ id: mockId });
  gen.next()

  it('puts fetchEventDetailsFailure', () => {
    const serverResponse = { errors: ['slot not found']};
    expect(gen.throw(serverResponse).value).toEqual(
      put(fetchEventDetailsFailure(serverResponse))
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});
