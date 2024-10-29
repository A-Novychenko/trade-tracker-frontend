import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3007/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      // const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);

      return data;
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
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);

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
      await axios.get('/users/logout');
      clearAuthHeader();

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
  async (_, { getState, rejectWithValue }) => {
    const persitedToken = getState().auth.token;

    if (persitedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persitedToken);
      const { data } = await axios.get('/users/current');

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
