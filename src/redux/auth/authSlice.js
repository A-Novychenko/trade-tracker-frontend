import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  resendVerify,
  logOut,
  refreshUser,
  resetPassword,
} from './authOperations';

const extraActions = [
  register,
  logIn,
  resendVerify,
  logOut,
  refreshUser,
  resetPassword,
];

const initialState = {
  isLoading: false,
  user: { name: null, email: null, role: null },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  verify: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setLoggedOut() {
      return initialState;
    },

    setVerify(state, action) {
      state.verify = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload: { user, verify } }) => {
        state.user = user;
        state.isLoading = false;
        state.verify = verify;
        state.error = null;
      })

      .addCase(resendVerify.pending, state => {
        state.isLoading = true;
      })
      .addCase(resendVerify.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })

      .addCase(resetPassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })

      .addCase(logIn.fulfilled, (state, { payload: { user } }) => {
        state.user = user;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(logOut.fulfilled, () => initialState)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, () => initialState)

      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
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

export const authReducer = authSlice.reducer;

export const { setLoggedOut } = authSlice.actions;
export const { setVerify } = authSlice.actions;
