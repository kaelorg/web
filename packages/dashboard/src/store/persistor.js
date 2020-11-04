import localForage from 'localforage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import stateReconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import localStorage from 'redux-persist/lib/storage';

function createPersistor(reducer, key, storage = localStorage) {
  return persistReducer(
    {
      keyPrefix: '@Kaeltec:',
      blacklist: ['_persist'],
      stateReconciler,
      storage,
      key,
    },
    reducer,
  );
}

export default function persistReducers({ auth, user, ...reducers }) {
  return combineReducers({
    auth: createPersistor(auth, 'auth'),
    user: createPersistor(user, 'user', localForage),
    ...reducers,
  });
}
