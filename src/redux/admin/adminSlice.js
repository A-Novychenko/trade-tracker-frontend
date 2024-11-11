import { createSlice } from '@reduxjs/toolkit';

import {
  getAllTransactions,
  getAllUsers,
  confirmTransaction,
  updatePercentage,
  deleteUser,
} from './adminOperation';

const initialState = {
  users: [],
  transactions: [],
  isLoading: false,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getAllUsers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.users = payload.data.users;

        state.isLoading = false;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllTransactions.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload.data.transactions;

        state.isLoading = false;
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(confirmTransaction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(confirmTransaction.fulfilled, (state, { payload }) => {
        const updatedTransactionId = payload.data.transaction._id;
        console.log('updatedTransactionId', updatedTransactionId);

        state.transactions = state.transactions.map(transaction =>
          transaction._id === updatedTransactionId
            ? { ...transaction, approved: true }
            : transaction
        );
        state.isLoading = false;
      })
      .addCase(confirmTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updatePercentage.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePercentage.fulfilled, (state, { payload }) => {
        const { _id, percentage } = payload.data.user;
        state.users = state.users.map(user =>
          user.id === _id ? { ...user, percentage } : user
        );
        state.isLoading = false;
      })
      .addCase(updatePercentage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        const deletedUserId = payload.data.user._id;
        state.users = state.users.filter(user => user._id !== deletedUserId);
        state.isLoading = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const adminReducer = adminSlice.reducer;
