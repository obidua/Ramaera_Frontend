
import axios from 'axios';

export const BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
  // Do NOT set Content-Type here to allow dynamic handling (JSON or FormData)
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken') || localStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
