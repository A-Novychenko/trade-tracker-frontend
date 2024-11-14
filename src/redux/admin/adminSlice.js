import { createSlice } from '@reduxjs/toolkit';

import {
  getAllTransactions,
  getAllUsers,
  confirmTransaction,
  updatePercentage,
  deleteUser,
  changeUserEmail,
  changeUserPassword,
  getCondition,
  addCondition,
  updateCondition,
  deleteCondition,
  getWallet,
  addWallet,
  updateWallet,
  deleteWallet,
} from './adminOperation';

const initialState = {
  users: [],
  transactions: [],
  condition: null,
  wallet: null,
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
        const deletedUserId = payload.user._id;
        state.users = state.users.filter(user => user._id !== deletedUserId);
        state.isLoading = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeUserEmail.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeUserEmail.fulfilled, (state, { payload }) => {
        const userId = payload.id;
        state.users = state.users.map(user =>
          user._id === userId ? { ...user, email } : user
        );
        state.isLoading = false;
      })
      .addCase(changeUserEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeUserPassword.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeUserPassword.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(changeUserPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCondition.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCondition.fulfilled, (state, { payload }) => {
        state.condition = payload.data.text || null;
        state.isLoading = false;
      })
      .addCase(getCondition.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCondition.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCondition.fulfilled, (state, { payload }) => {
        console.log('add', payload);
        state.condition = payload.data.text;
        state.isLoading = false;
      })
      .addCase(addCondition.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateCondition.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCondition.fulfilled, (state, { payload }) => {
        state.condition = payload.data.text;
        state.isLoading = false;
      })
      .addCase(updateCondition.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteCondition.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCondition.fulfilled, (state, { payload }) => {
        state.condition = '';
        state.isLoading = false;
      })
      .addCase(deleteCondition.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getWallet.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWallet.fulfilled, (state, { payload }) => {
        state.wallet = payload.data.text || '';

        state.isLoading = false;
      })
      .addCase(getWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addWallet.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addWallet.fulfilled, (state, { payload }) => {
        state.wallet = payload.data.text;
        state.isLoading = false;
      })
      .addCase(addWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateWallet.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateWallet.fulfilled, (state, { payload }) => {
        state.wallet = payload.data.text;
        state.isLoading = false;
      })
      .addCase(updateWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteWallet.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteWallet.fulfilled, (state, { payload }) => {
        state.wallet = '';
        state.isLoading = false;
      })
      .addCase(deleteWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const adminReducer = adminSlice.reducer;
