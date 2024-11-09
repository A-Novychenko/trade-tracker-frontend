import { createAsyncThunk } from '@reduxjs/toolkit';

import { serverAPI } from '../../utils/serverAPI';

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
      console.log('data', data);

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
  async (_, { rejectWithValue }) => {
    try {
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
