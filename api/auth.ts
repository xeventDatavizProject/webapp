import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export type loginUserType = {
  email: string;
  password: string;
};

export type createUserType = {
  username: string;
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk('auth/loginUser', async (data: loginUserType) => {
  const response = await axios
    .post(`/api/auth/login`, data)
    .then(res => res.data)
    .catch(err => Promise.reject(err.response.data.message ? err.response.data.message : err.message));

  return response;
});

export const createUser = createAsyncThunk('auth/createUser', async (data: createUserType) => {
  const response = await axios
    .post(`/api/auth/signin`, data)
    .then(res => res.data)
    .catch(err => Promise.reject(err.response.data.message ? err.response.data.message : err.message));

  return response;
});
