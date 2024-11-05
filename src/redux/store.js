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

import { authReducer } from './auth/authSlice';

import { paymentsReducer } from './payments/paymentsSlice';

const isDev = import.meta.env.VITE_NODE_ENV === 'development';

const authPersistConfig = {
  key: 'auth',
  storage,
  // whitelist: [],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    payments: paymentsReducer,
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
