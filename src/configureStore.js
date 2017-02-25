import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { parseDate } from './helpers/dates';
import rootSaga from './sagas';
import rootReducer from './reducers';

export default () => {
  const reduxSagaMiddleware = createSagaMiddleware();
  const middleware = [ reduxSagaMiddleware ];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  reduxSagaMiddleware.run(rootSaga);
  return store;
};
