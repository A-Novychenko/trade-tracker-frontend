import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  fetchPayments,
  addPayment,
  deletePayment,
  updatePayment,
} from './paymentsOperations';

const extraActions = [fetchPayments, addPayment, deletePayment, updatePayment];

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    completed: null,
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },

    setCompleted(state, action) {
      state.completed = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPayments.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })

      .addCase(addPayment.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
        state.completed = true;
      })

      .addCase(deletePayment.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.completed = true;
        state.items.splice(
          state.items.findIndex(payment => payment.id === payload.id),
          1
        );
      })

      .addCase(updatePayment.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.completed = true;
        state.items[
          state.items.findIndex(payment => payment.id === payload.id)
        ] = { ...payload };
      })

      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
          state.isLoading = true;
          state.completed = null;
        }
      )

      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const paymentsReducer = paymentsSlice.reducer;

export const { setError, setCompleted } = paymentsSlice.actions;
