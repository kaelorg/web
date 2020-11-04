import { toast } from 'react-toastify';
import { REHYDRATE } from 'redux-persist';
import { takeLatest, all, put, call } from 'redux-saga/effects';

import api from '@app/services/api';
import history from '@app/services/history';

import { actions as userActions } from '../user/actions';
import { types, actions } from './actions';

export function* signIn({ payload }) {
  try {
    const { token, type } = payload;
    const {
      data: { ok },
    } = yield call(api.get, 'auth/verify', {
      headers: {
        Authorization: `${type} ${token}`,
      },
    });

    if (!ok) throw new Error('INVALID_REQUEST');

    api.defaults.headers.Authorization = `${type} ${token}`;

    const {
      data: { user, helpers },
    } = yield call(api.get, 'users/@me');

    yield put(actions.signInSuccess({ token, type }));
    yield put(userActions.setUser({ user: Object.assign(user, { helpers }) }));

    history.push('/profile');
  } catch (err) {
    yield put(actions.signFailure());

    history.push('/');
    toast.error('Falha na autenticação');
  }
}

export function* setToken({ key, payload }) {
  if (!payload) return;

  if (key === 'auth') {
    const { signed, token, tokenType } = payload;

    if (token) {
      api.defaults.headers.Authorization = `${tokenType} ${token}`;
    } else if (signed) yield put(actions.logOut());
  }
}

export default all([
  takeLatest(REHYDRATE, setToken),
  takeLatest(types.signInRequest, signIn),
]);
