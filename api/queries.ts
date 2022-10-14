import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type testQueryType = {
  query: string;
};

export const getMostUsedQueries = createAsyncThunk(
  "instances/mostUsedQueries",
  async () => {
    const response = await axios
      .get(`/api/instances/queries/most-used-queries`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => res.data)
      .catch((err) =>
        Promise.reject(
          err.response.data.message ? err.response.data.message : err.message
        )
      );

    return response;
  }
);
export const getAllQueries = createAsyncThunk(
  "instances/queries/all-queries",
  async () => {
    const response = await axios
      .get(`/api/instances/queries/all-queries`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => res.data)
      .catch((err) =>
        Promise.reject(
          err.response.data.message ? err.response.data.message : err.message
        )
      );

    return response;
  }
);

export const getErrorQueries = createAsyncThunk(
  "instances/queries/error-queries",
  async () => {
    const response = await axios
      .get(`/api/instances/queries/error-queries`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => res.data)
      .catch((err) =>
        Promise.reject(
          err.response.data.message ? err.response.data.message : err.message
        )
      );

    return response;
  }
);

export const testQuery = createAsyncThunk(
  "instances/test-request",
  async (data: testQueryType) => {
    console.log(data);
    const response = await axios
      .post(`/api/instances/test-request`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => res.data)
      .catch((err) =>
        Promise.reject(
          err.response.data.message ? err.response.data.message : err.message
        )
      );
    return response;
  }
);
