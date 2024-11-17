import { createAsyncThunk } from '@reduxjs/toolkit';

import { serverAPI } from '../../utils/serverAPI';

import { toast } from 'react-toastify';

export const getAllUsers = createAsyncThunk(
  'admin/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await serverAPI.get('/admin/users');

      return response.data;
    } catch (error) {
      toast.error(error.message);
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
      toast.error(error.message);
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
      toast.success('Транзакция подтверждена');
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const updatePercentage = createAsyncThunk(
  'admin/updatePercentage',
  async ({ id, percentage }, { rejectWithValue }) => {
    console.log('first update', id, percentage);
    try {
      const response = await serverAPI.patch(`/admin/percentage/${id}`, {
        percentage: percentage,
      });
      toast.success('Процент обновлен');
      return response.data;
    } catch (error) {
      toast.error(error.message);
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
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'admin/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.delete(`/admin/user/${id}`);
      toast.success('Пользователь удален');
      return data;
    } catch (error) {
      toast.error(error.message);
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
      toast.success('Почта изменена');
      return data;
    } catch (error) {
      toast.error(error.message);
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
      toast.success('Пароль изменен');
      return data;
    } catch (error) {
      toast.error(error.message);
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
      toast.error(error.message);
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
      toast.error(error.message);
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
      toast.success('Условия обновлены');
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCondition = createAsyncThunk(
  'admin/deleteCondition',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.delete('/content/conditions');
      toast.success('Условия удалены');
      return data;
    } catch (error) {
      toast.error(error.message);
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
      toast.error(error.message);
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
      toast.error(error.message);
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
      toast.success('Кошелек обновлен');
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWallet = createAsyncThunk(
  'admin/deleteWallet',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.delete('/content/wallet');
      toast.success('Кошелек удален');
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
