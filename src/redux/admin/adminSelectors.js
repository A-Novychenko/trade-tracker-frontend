export const selectAdminAllTransactions = state => state.admin.transactions;
export const selectAdminAllUsers = state => state.admin.users;
export const isAdminLoading = state => state.admin.isLoading;
export const isAdminError = state => state.admin.error;
export const selectCondition = state => state.admin.condition;
export const selectWallet = state => state.admin.wallet;

export const selectAdminSelectors = {
  selectAdminAllTransactions,
  selectAdminAllUsers,
  selectCondition,
  selectWallet,
  isAdminLoading,
  isAdminError,
};
