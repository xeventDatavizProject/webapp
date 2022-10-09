import { createSlice } from "@reduxjs/toolkit";
import { getAllQueries } from "api/queries";
import { QueriesState } from "./state";

export const QueriesSlice = createSlice({
  name: "queries",
  initialState: QueriesState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllQueries.pending, (state, action) => {
        state.allQueries.status = "loading";
      })
      .addCase(getAllQueries.fulfilled, (state, action) => {
        state.allQueries.status = "succeeded";

        state.allQueries.data = action.payload;
      })
      .addCase(getAllQueries.rejected, (state, action) => {
        state.allQueries.status = "failed";

        state.allQueries.error = action.error.message;
      });
  },
});

export default QueriesSlice.reducer;
