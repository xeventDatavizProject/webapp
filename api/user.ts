import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const getCurrentUser = createAsyncThunk('user/getCurrentUser', async (userID: string) => {
  const response = await axios
    .get(`/api/users/${userID}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then(res => res.data)
    .catch(err => Promise.reject(err.response.data.message ? err.response.data.message : err.message));

  return response;
});
