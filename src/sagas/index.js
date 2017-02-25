import { call, takeEvery, put } from 'redux-saga/effects';
import * as apiClients from '../apiClients';
import { fetchEventsSuccess } from '../actions';

export function* fetchEvents() {
  const response = yield call(apiClients.fetchEvents);
  yield put(fetchEventsSuccess(response));
}

export function* watchEventsRequests() {
  yield takeEvery('FETCH_EVENTS_REQUEST', fetchEvents);
}

export default function* rootSaga() {
  yield [
    watchEventsRequests()
  ];
}
