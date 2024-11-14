import { createAsyncThunk } from '@reduxjs/toolkit';

import { serverAPI } from '../../utils/serverAPI';

export const getUserTransaction = createAsyncThunk(
  'user/getUserTransaction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await serverAPI.get('/transactions');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userChangePassword = createAsyncThunk(
  'user/userChangePassword',
  async (password, { rejectWithValue }) => {
    try {
      const response = await serverAPI.patch('/users/password', { password });
      console.log('resp', response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
