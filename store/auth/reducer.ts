import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from 'api/auth';
import { AuthState } from './state';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: AuthState,
  reducers: {
    setAuthLogged(state, action) {
      state.isLoggedIn = action.payload;
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
      });
  },
});

export const { setAuthLogged } = AuthSlice.actions;

export default AuthSlice.reducer;
