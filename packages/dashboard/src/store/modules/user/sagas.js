import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '@app/services/api';

import { types, actions } from './actions';

export function* refreshUser() {
  try {
    const {
      data: { user, helpers },
    } = yield call(api.get, 'users/@me');

    yield put(actions.setUser({ user: Object.assign(user, { helpers }) }));
  } catch (e) {
    yield put(actions.requestFailure());
  }
}

export default all([takeLatest(types.refreshUser, refreshUser)]);
