import { createAsyncThunk } from '@reduxjs/toolkit';

import { serverAPI } from '../../utils/serverAPI';

import { toast } from 'react-toastify';

export const fetchPayments = createAsyncThunk(
  'payments/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.get('/payments');
      return data.data;
    } catch (err) {
      if (err.response.status === 401) {
        toast.error(
          'Authorization problem. Payments technical support: support@mail.com'
        );
        return rejectWithValue(
          'Authorization problem. Payments technical support: support@mail.com'
        );
      }
      return rejectWithValue(err.message);
    }
  }
);

export const addPayment = createAsyncThunk(
  'payments/addPayment',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      console.log('addPayment');
      const { data } = await serverAPI.post('/payments', { name, number });
      toast.success('Платеж добавлен');
      return data.data;
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(
          'Authorization problem. Payments technical support: support@mail.com'
        );
      }
      if (err.response.status === 403) {
        toast.error(
          'Authorization problem. Payments technical support: support@mail.com'
        );
        return rejectWithValue(
          'Authorization problem. Payments technical support: support@mail.com'
        );
      }
      return rejectWithValue(err.message);
    }
  }
);

export const deletePayment = createAsyncThunk(
  'payments/deletePayment ',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await serverAPI.delete(`/payments/${id}`);
      toast.success('Платеж удален');
      return resp.data;
    } catch (err) {
      if (err.response.status === 401) {
        toast.error(
          'Authorization problem. Payments technical support: support@mail.com'
        );
        return rejectWithValue(
          'Authorization problem. Payments technical support: support@mail.com'
        );
      }
      return rejectWithValue(err.message);
    }
  }
);

export const updatePayment = createAsyncThunk(
  'payments/updatePayment ',
  async ({ number, name, id }, { rejectWithValue }) => {
    try {
      const resp = await serverAPI.patch(`/payments/${id}`, { number, name });
      toast.success('Платеж обновлен');
      return resp.data;
    } catch (err) {
      if (err.response.status === 401) {
        toast.error(
          'Authorization problem. Payments technical support: support@mail.com'
        );
        return rejectWithValue(
          'Authorization problem. Payments technical support: support@mail.com'
        );
      }
      return rejectWithValue(err.message);
    }
  }
);
