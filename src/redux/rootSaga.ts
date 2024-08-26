import { all, fork } from 'redux-saga/effects';
import { watchAppSagas } from './app/appSaga';

export function* rootSaga() {
    yield all([fork(watchAppSagas)]);
}
