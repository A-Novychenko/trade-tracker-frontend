import { createAsyncThunk } from '@reduxjs/toolkit';

import { serverAPI } from '../../utils/serverAPI';

const setToken = token => {
  if (token) {
    return (serverAPI.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  serverAPI.defaults.headers.common.authorization = '';
};

let onTokenUpdate;
let onIsLogged;

export const setTokenUpdateCallback = callback => {
  onTokenUpdate = callback;
};

export const setLogoutIsLoggedInCallback = callback => {
  onIsLogged = callback;
};

serverAPI.interceptors.response.use(
  res => res,
  async e => {
    if (e.response && e.response.status === 401 && !e.config._retry) {
      e.config._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          throw new Error('Refresh token missing');
        }

        const { data } = await serverAPI.post('/users/refresh', {
          refreshToken,
        });

        const newAccessToken = data.data.accessToken;
        const newRefreshToken = data.data.refreshToken;

        setToken(data.data.accessToken);

        localStorage.setItem('refreshToken', newRefreshToken);

        if (onTokenUpdate) {
          onTokenUpdate({
            token: newAccessToken,
          });
        }

        e.config.headers['authorization'] = `Bearer ${newAccessToken}`;
        return serverAPI(e.config);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError.message);
        if (refreshError.status === 403) {
          if (onIsLogged) {
            onIsLogged();
          }
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(e);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.post('/users/register', credentials);

      return data.data;
    } catch (err) {
      if (err.response.status === 400) {
        return rejectWithValue(
          `Error creating user!  Try a different name or email`
        );
      }
      return rejectWithValue(
        `Oops! What's broken, please try again later. Error: " ${err.message} " `
      );
    }
  }
);

export const resendVerify = createAsyncThunk(
  'auth/resendVerify',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.post('/users/verify', email);

      return data.data;
    } catch (err) {
      if (err.response.status === 400) {
        return rejectWithValue(
          `Error creating user!  Try a different name or email`
        );
      }
      return rejectWithValue(
        `Oops! What's broken, please try again later. Error: " ${err.message} " `
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.post('/users/login', credentials);

      setToken(data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);

      return data.data;
    } catch (err) {
      if (err.response.status === 400) {
        return rejectWithValue(
          'User is not found! You may have entered an incorrect email address or password.'
        );
      }
      return rejectWithValue(
        `Oops! What's broken, please try again later. Error: " ${err.message} " `
      );
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await serverAPI.get('/users/logout');

      setToken();

      return;
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(
          'Something went wrong. Contact technical support: support@mail.com'
        );
      }

      return rejectWithValue(
        `Oops! What's broken, please try again later. Error: " ${err.message} " `
      );
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(persistedToken);

      const { data } = await serverAPI.get('/users/current');

      return data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.post('/users/reset-password', { email });

      return data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
