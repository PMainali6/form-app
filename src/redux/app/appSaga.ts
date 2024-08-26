import { all, put, takeLatest } from 'redux-saga/effects';
import * as AppAction from './appAction';
import { setMessage } from './appSlice';

export function* setGreetingMessage(
  action: ReturnType<typeof AppAction.greetingMessage>,
) {
  yield put(setMessage(action.payload));
}

export function* watchAppSagas() {
  yield all([takeLatest(AppAction.greetingMessage.type, setGreetingMessage)]);
}
