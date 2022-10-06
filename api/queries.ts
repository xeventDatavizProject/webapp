import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

type AllQueriesParams = {
  userId: string;
  queryTime?: string;
  dateHour?: string;
  databaseUser?: string;
};

export const getAllQueries = createAsyncThunk(
  "queries/getAllQueries",
  async (params: AllQueriesParams) => {
    const { userId, queryTime, dateHour, databaseUser } = params;

    // const response = await axios
    //   .get(`/api/${userId}/all_queries`, {
    //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    //     params: {
    //       queryTime,
    //       dateHour,
    //       databaseUser,
    //     },
    //   })
    //   .then(res => res.data)
    //   .catch(err => Promise.reject(err.response.data.message ? err.response.data.message : err.message));
    const response = await axios
      .get(`/api/queries`)
      .then((res) => res.data)
      .catch((err) =>
        Promise.reject(
          err.response.data.message ? err.response.data.message : err.message
        )
      );

    return response;
  }
);

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
