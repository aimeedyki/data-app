import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandboxapi.bignerdranch.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
});

export default api;
