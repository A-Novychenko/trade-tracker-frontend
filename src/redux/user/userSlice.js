import { createSlice } from '@reduxjs/toolkit';
import { getUserTransaction } from './userOperation';

const initialState = {
  transactions: [],
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
      });
  },
});

export const userReducer = userSlice.reducer;
