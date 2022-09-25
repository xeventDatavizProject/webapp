import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from 'api/auth';

interface AuthState {
  value: number;
  isLoggedIn: boolean;
  login: {
    status: 'loading' | 'succeeded' | 'failed' | null;
    error?: string;
  };
}

// const isUserLoggedIn = localStorage.getItem('token') ? true : false;

const initialState: AuthState = {
  value: 0,
  isLoggedIn: false,
  login: {
    status: null,
    error: undefined,
  },
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
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

export const { increment, decrement } = AuthSlice.actions;

export default AuthSlice.reducer;
