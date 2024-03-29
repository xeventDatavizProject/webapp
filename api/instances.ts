import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type createInstanceType = {
  instanceUser: string;
  instancePort: string;
  hostname: string;
  instancePassword: string;
};

export type createUserType = {
  username: string;
  email: string;
  password: string;
};

export const createInstance = createAsyncThunk(
  "instances/register",
  async (data: createInstanceType) => {
    const response = await axios
      .post(`/api/instances`, data, {
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

export const getUserInstances = createAsyncThunk(
  "instances/getUserInstances",
  async () => {
    const response = await axios
      .get(`/api/instances`, {
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

export const activeGlobal = createAsyncThunk(
  "instances/activeGlobal",
  async (instanceId: string) => {
    const response = await axios
      .post(
        `/api/instances/${instanceId}/activate-global`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => res.data)
      .catch((err) =>
        Promise.reject(
          err.response.data.message ? err.response.data.message : err.message
        )
      );

    return response;
  }
);

export const getAllInstances = createAsyncThunk(
  "instances/getAllInstances",
  async () => {
    const response = await axios
      .get(`/api/instances/`, {
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
