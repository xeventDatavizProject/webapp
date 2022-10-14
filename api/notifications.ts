import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotifications = createAsyncThunk("notifications", async () => {
  const response = await axios
    .get(`/api/notifications`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => res.data)
    .catch((err) =>
      Promise.reject(
        err.response.data.message ? err.response.data.message : err.message
      )
    );

  return response;
});
