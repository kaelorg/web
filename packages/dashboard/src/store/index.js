import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga } from './modules';
import persistReducers from './persistor';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const enhancer =
  process.env.NODE_ENV !== 'production'
    ? compose(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
