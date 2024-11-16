import { createSelector } from '@reduxjs/toolkit';

export const selectUserAllTransactions = state => state.user.transactions;
export const selectUserIsLoading = state => state.user.isLoading;
export const selectUserIsError = state => state.user.error;
export const selectConditions = state => state.user.conditions;

export const selectWithdrawTransactions = createSelector(
  [selectUserAllTransactions],
  transactions =>
    transactions.filter(transaction => transaction.type === 'withdraw')
);

export const selectDepositTransactions = createSelector(
  [selectUserAllTransactions],
  transactions =>
    transactions.filter(transaction => transaction.type === 'deposit')
);

export const selectUserSelectors = {
  selectUserAllTransactions,
  selectWithdrawTransactions,
  selectDepositTransactions,
  selectUserIsLoading,
  selectUserIsError,
  selectConditions,
};
