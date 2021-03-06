import { call, takeEvery, put } from 'redux-saga/effects';
import * as apiClients from '../apiClients';
import {
  fetchEventsSuccess,
  fetchEventDetailsSuccess,
  fetchEventDetailsFailure } from '../actions';

export function* fetchEvents() {
  const response = yield call(apiClients.fetchEvents);
  yield put(fetchEventsSuccess(response));
}

export function* watchEventsRequests() {
  yield takeEvery('FETCH_EVENTS_REQUEST', fetchEvents);
}

export function* fetchEventDetails({ id }) {
  try {
    const response = yield call(apiClients.fetchEventDetails, id);
    yield put(fetchEventDetailsSuccess(response));
  } catch (e) {
    yield put(fetchEventDetailsFailure(e));
  }
}

export function* watchEventDetailsRequests() {
  yield takeEvery('FETCH_EVENT_DETAILS_REQUEST', fetchEventDetails);
}

export default function* rootSaga() {
  yield [
    watchEventsRequests(),
    watchEventDetailsRequests()
  ];
}
