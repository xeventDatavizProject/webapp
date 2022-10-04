import { createSlice } from '@reduxjs/toolkit';
import { getAllInstances } from 'api/instances';
import { InstancesState } from './state';

export const InstancesSlice = createSlice({
  name: 'instances',
  initialState: InstancesState,
  reducers: {
    setAuthLogged(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      // .addCase(loginUser.pending, (state, action) => {
      //   state.login.status = 'loading';
      // })
      // .addCase(loginUser.fulfilled, (state, action) => {
      //   state.login.status = 'succeeded';

      //   if (action.payload.token) {
      //     localStorage.setItem('token', action.payload.token);
      //     localStorage.setItem('userId', action.payload.userId);
      //   }
      // })
      // .addCase(loginUser.rejected, (state, action) => {
      //   state.login.status = 'failed';

      //   state.login.error = action.error.message;
      // })
      .addCase(getAllInstances.pending, (state, action) => {
        state.instances.status = 'loading';
      })
      .addCase(getAllInstances.fulfilled, (state, action) => {
        state.instances.status = 'succeeded';
      })
      .addCase(getAllInstances.rejected, (state, action) => {
        state.instances.status = 'failed';
      });
  },
});

export const { setAuthLogged } = InstancesSlice.actions;

export default InstancesSlice.reducer;
