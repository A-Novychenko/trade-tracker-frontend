import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, register, logOut, refreshUser } from './authOperations';

const extraActions = [register, logIn, logOut, refreshUser];

const initialState = {
  isLoading: false,
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  verify: false,
};

const authSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    setVerify(state, action) {
      state.verify = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload: { verify } }) => {
        // .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        // state.user = user;
        // state.token = token;
        // state.isLoggedIn = true;

        state.isLoading = false;
        state.verify = verify;
        state.error = null;
      })

      .addCase(logIn.fulfilled, (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(logOut.fulfilled, () => initialState)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
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
export const { setVerify } = authSlice.actions;
