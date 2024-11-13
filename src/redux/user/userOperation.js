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
