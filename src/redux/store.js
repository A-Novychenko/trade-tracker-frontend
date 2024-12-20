import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { authReducer, setTokenInState, setIsLoggedIn } from './auth/authSlice';

import { paymentsReducer } from './payments/paymentsSlice';
import { adminReducer } from './admin/adminSlice';
import { langReducer } from './lang/langSlice';
import { userReducer } from './user/userSlice';
import {
  setTokenUpdateCallback,
  setLogoutIsLoggedInCallback,
} from './auth/authOperations';

const isDev = import.meta.env.VITE_NODE_ENV === 'development';

const authPersistConfig = {
  key: 'auth',
  storage,
  // whitelist: [],
};
const langPersistConfig = {
  key: 'lang',
  storage,
};

setTokenUpdateCallback(newTokens => {
  store.dispatch(setTokenInState(newTokens));
});

setLogoutIsLoggedInCallback(() => {
  store.dispatch(setIsLoggedIn(false));
});

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    lang: persistReducer(langPersistConfig, langReducer),
    payments: paymentsReducer,
    admin: adminReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: isDev,
});

export const persistor = persistStore(store);
