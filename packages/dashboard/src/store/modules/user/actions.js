import { createActions } from '../config';

export const types = {
  setUser: '@user/SET_USER',
  refreshUser: '@user/REFRESH_USER',
  requestFailure: '@user/REQUEST_FAILURE',
};

export const actions = createActions({
  setUser: types.setUser,
  refreshUser: types.refreshUser,
  requestFailure: types.requestFailure,
});
