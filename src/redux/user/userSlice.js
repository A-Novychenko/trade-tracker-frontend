import { createSlice } from '@reduxjs/toolkit';
import {
  getUserTransaction,
  addUserTransactionDeposit,
  addUserTransactionWithdraw,
  getConditions,
  getWallet,
} from './userOperation';

const initialState = {
  transactions: [],
  conditions: '',
  wallet: '',
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getUserTransaction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserTransaction.fulfilled, (state, { payload }) => {
        state.transactions = payload.data.transactions;

        state.isLoading = false;
      })
      .addCase(getUserTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addUserTransactionDeposit.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addUserTransactionDeposit.fulfilled, (state, { payload }) => {
        state.transactions = payload.data.transactions;

        state.isLoading = false;
      })
      .addCase(addUserTransactionDeposit.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addUserTransactionWithdraw.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addUserTransactionWithdraw.fulfilled, (state, { payload }) => {
        state.transactions = payload.data.transactions;

        state.isLoading = false;
      })
      .addCase(addUserTransactionWithdraw.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getConditions.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getConditions.fulfilled, (state, { payload }) => {
        state.conditions = payload.data.text;

        state.isLoading = false;
      })
      .addCase(getConditions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getWallet.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWallet.fulfilled, (state, { payload }) => {
        state.wallet = payload.data.text;

        state.isLoading = false;
      })
      .addCase(getWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
