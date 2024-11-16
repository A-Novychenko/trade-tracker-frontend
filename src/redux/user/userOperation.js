import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import { serverAPI } from '../../utils/serverAPI';
import { sendTG } from 'utils/sendTG';

export const getUserTransaction = createAsyncThunk(
  'user/getUserTransaction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await serverAPI.get('/transactions');

      return response.data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addUserTransactionDeposit = createAsyncThunk(
  'user/addUserTransactionDeposit',
  async ({ amount, name, id, email }, { rejectWithValue }) => {
    try {
      const response = await serverAPI.post('/transactions/deposit', {
        amount,
      });

      const msg = `<b>Новый ВВОД</b>\n\n<b>Имя пользователя: ${name}</b>\n<b>ID пользователя: ${id}</b>\n<b>Почта: ${email}</b>\n\n<b>Сумма: ${amount}</b>`;

      await sendTG(msg);
      toast.success('Транзакция добавлена');
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addUserTransactionWithdraw = createAsyncThunk(
  'user/addUserTransactionWithdraw',
  async ({ amount, wallet, name, id, email }, { rejectWithValue }) => {
    try {
      const response = await serverAPI.post('/transactions/withdraw', {
        amount,
        wallet,
      });

      const msg = `<b>Запрос на ВЫВОД</b>\n\n<b>Имя пользователя: ${name}</b>\n<b>ID пользователя: ${id}</b>\n<b>Почта: ${email}</b>\n\n<b>Сумма: ${amount}</b>\n\n<b>Кошелёк: ${wallet}</b>`;

      await sendTG(msg);
      toast.success('Транзакция добавлена');
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const userChangePassword = createAsyncThunk(
  'user/userChangePassword',
  async (password, { rejectWithValue }) => {
    try {
      const response = await serverAPI.patch('/users/password', { password });

      toast.success('Пароль изменен');
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getConditions = createAsyncThunk(
  'user/getConditions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await serverAPI.get('/content/conditions');

      return response.data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getWallet = createAsyncThunk(
  'user/getWallet',
  async (_, { rejectWithValue }) => {
    try {
      const response = await serverAPI.get('/content/wallet');

      return response.data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
