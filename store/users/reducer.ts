import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "api/user";
import { UsersState } from "./state";

export const UsersSlice = createSlice({
  name: "users",
  initialState: UsersState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      // state.login.status = 'succeeded';
      state.currentUser = action.payload;
    });
  },
});

export const { setCurrentUser } = UsersSlice.actions;

export default UsersSlice.reducer;
