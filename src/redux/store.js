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
import { adminReducer } from './admin/adminSlice';
import { langReducer } from './lang/langSlice';

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

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    lang: persistReducer(langPersistConfig, langReducer),
    payments: paymentsReducer,
    admin: adminReducer,
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
