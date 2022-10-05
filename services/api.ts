import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject({
      ...error.response.data,
      message: Array.isArray(error.response.data.message) ? error.response.data.message?.[0] : error.response.data.message,
    });
  },
);

export default apiClient;
