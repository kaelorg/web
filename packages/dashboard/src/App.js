import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { REHYDRATE } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import colors from './config/colors';
import { GuildProvider } from './contexts/guild';
import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';

const App = () => {
  useEffect(() => {
    window.addEventListener('storage', e => {
      const { auth } = store.getState();

      if (auth.signed && (e.key === '@Kaeltec:auth' || !localStorage.length)) {
        store.dispatch({ type: REHYDRATE });
        window.location.reload();
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={colors}>
          <GuildProvider>
            <Router history={history}>
              <Routes />
            </Router>
          </GuildProvider>

          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
