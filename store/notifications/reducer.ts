import { createSlice } from "@reduxjs/toolkit";
import { getNotifications } from "api/notifications";
import { NotificationState } from "./state";

export const NotificationSlice = createSlice({
  name: "notifications",
  initialState: NotificationState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNotifications.pending, (state, action) => {
        state.notifications.status = "loading";
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.notifications.status = "succeeded";

        state.notifications.data = action.payload;
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.notifications.status = "failed";

        state.notifications.error = action.error.message;
      });
  },
});

export default NotificationSlice.reducer;
