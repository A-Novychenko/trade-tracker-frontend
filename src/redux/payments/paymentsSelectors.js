import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectPayments = state => state.payments.items;
export const selectIsLoading = state => state.payments.isLoading;
export const selectError = state => state.payments.error;
export const selectCompleted = state => state.payments.completed;

export const selectedVisiblePayments = createSelector(
  [selectPayments, selectFilter],
  (payments, filter) => {
    if (payments && payments.length) {
      return payments.filter(({ name }) =>
        name.toLowerCase().trim().includes(filter.toLowerCase().trim())
      );
    } else {
      return [];
    }
  }
);
