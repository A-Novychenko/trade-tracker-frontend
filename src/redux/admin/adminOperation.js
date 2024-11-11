import { createAsyncThunk } from '@reduxjs/toolkit';

import { serverAPI } from '../../utils/serverAPI';

export const getAllUsers = createAsyncThunk(
  'admin/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await serverAPI.get('/admin/users');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'admin/getAllTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await serverAPI.get('/admin/transactions');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const confirmTransaction = createAsyncThunk(
  'admin/confirmTransaction',
  async (credential, { rejectWithValue }) => {
    try {
      const response = await serverAPI.patch(`/admin/confirm/${credential}`, {
        transactionId: credential,
      });
      console.log('resp', response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePercentage = createAsyncThunk(
  'admin/updatePercentage',
  async ({ id, percentage }, { rejectWithValue }) => {
    try {
      const response = await serverAPI.patch(`/admin/percentage/${id}`, {
        percentage: percentage,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserById = createAsyncThunk(
  'admin/getUserById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.get(`/admin/user/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'admin/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.delete(`/admin/user/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
