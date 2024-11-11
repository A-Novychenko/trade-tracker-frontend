export const selectAdminAllTransactions = state => state.admin.transactions;
export const selectAdminAllUsers = state => state.admin.users;
export const isAdminLoading = state => state.admin.isLoading;
export const isAdminError = state => state.admin.error;

export const selectAdminSelectors = {
  selectAdminAllTransactions,
  selectAdminAllUsers,
  isAdminLoading,
  isAdminError,
};
