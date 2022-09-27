import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser } from 'api/auth';
import { AuthState } from './state';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: AuthState,
  reducers: {
    setAuthLogged(state, action) {
      state.isLoggedIn = action.payload;
    },
    resetErrors(state) {
      state.login.error = undefined;
      state.createUser.error = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.login.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.status = 'succeeded';

        if (action.payload.token) {
          localStorage.setItem('token', action.payload.token);
          localStorage.setItem('userId', action.payload.userId);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.status = 'failed';

        state.login.error = action.error.message;
      })
      .addCase(createUser.pending, (state, action) => {
        state.createUser.status = 'loading';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.createUser.status = 'succeeded';
      })
      .addCase(createUser.rejected, (state, action) => {
        state.createUser.status = 'failed';

        state.createUser.error = action.error.message;
      });
  },
});

export const { setAuthLogged, resetErrors } = AuthSlice.actions;

export default AuthSlice.reducer;
