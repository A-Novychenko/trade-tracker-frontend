export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
export const selectVerify = state => state.auth.verify;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsAdmin = state => state.auth.user.role === 'admin';

export const selectAuthSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectError,
  selectVerify,
  selectIsLoading,
  selectIsAdmin,
};
