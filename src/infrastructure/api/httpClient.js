import axios from 'axios';

/**
 * Base HTTP client. Swap the baseURL for a real API when ready.
 */
export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error?.response?.data ?? error)
);
