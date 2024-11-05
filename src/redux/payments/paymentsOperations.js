import { createAsyncThunk } from '@reduxjs/toolkit';

import { serverAPI } from '../../utils/serverAPI';

export const fetchPayments = createAsyncThunk(
  'payments/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serverAPI.get('/payments');
      return data.data;
    } catch (err) {
      if (err.response.status === 401) {
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
      return data.data;
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(
          'Authorization problem. Payments technical support: support@mail.com'
        );
      }
      if (err.response.status === 403) {
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
      return resp.data;
    } catch (err) {
      if (err.response.status === 401) {
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
      return resp.data;
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(
          'Authorization problem. Payments technical support: support@mail.com'
        );
      }
      return rejectWithValue(err.message);
    }
  }
);
