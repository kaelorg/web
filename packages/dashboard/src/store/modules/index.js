import { all } from 'redux-saga/effects';

import { reducer as authReducer, sagas as authSagas } from './auth';
import { reducer as userReducer, sagas as userSagas } from './user';

export function* rootSaga() {
  return yield all([authSagas, userSagas]);
}

export const rootReducer = {
  auth: authReducer,
  user: userReducer,
};
