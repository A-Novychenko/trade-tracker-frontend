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

export const changeUserEmail = createAsyncThunk(
  'admin/changeUserEmail',
  async ({ id, email }, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.patch(`/admin/email/${id}`, {
        email,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeUserPassword = createAsyncThunk(
  'admin/changeUserPassword',
  async ({ id, password }, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.patch(`/admin/password/${id}`, {
        password,
      });
      console.log('data', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCondition = createAsyncThunk(
  'admin/getCondition',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.get('/content/conditions');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCondition = createAsyncThunk(
  'admin/addCondition',
  async ({ text }, { rejectWithValue }) => {
    try {
      console.log('text', text);
      const { data } = await serverAPI.post('/content/conditions', {
        text: text,
      });
      console.log('condition', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCondition = createAsyncThunk(
  'admin/updateCondition',
  async ({ text }, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.patch('/content/conditions', {
        text: text,
      });
      console.log('condition', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCondition = createAsyncThunk(
  'admin/deleteCondition',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.delete('/content/conditions');
      console.log('del', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getWallet = createAsyncThunk(
  'admin/getWallet',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.get('/content/wallet');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addWallet = createAsyncThunk(
  'admin/addWallet',
  async ({ text }, { rejectWithValue }) => {
    try {
      console.log('wallet', text);
      const { data } = await serverAPI.post('/content/wallet', {
        text: text,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateWallet = createAsyncThunk(
  'admin/updateWallet',
  async ({ text }, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.patch('/content/wallet', {
        text: text,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWallet = createAsyncThunk(
  'admin/deleteWallet',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.delete('/content/wallet');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
