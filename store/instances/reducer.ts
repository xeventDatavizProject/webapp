import { createSlice } from "@reduxjs/toolkit";
import { getAllInstances } from "api/instances";
import { InstancesState } from "./state";

export const InstancesSlice = createSlice({
  name: "instances",
  initialState: InstancesState,
  reducers: {
    setAuthLogged(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllInstances.pending, (state, action) => {
        state.instances.status = "loading";
      })
      .addCase(getAllInstances.fulfilled, (state, action) => {
        state.instances.status = "succeeded";
      })
      .addCase(getAllInstances.rejected, (state, action) => {
        state.instances.status = "failed";
      });
  },
});

export const { setAuthLogged } = InstancesSlice.actions;

export default InstancesSlice.reducer;
