import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.BASIC_URL || 'https://mock.apifox.com/m1/3534088-0-default',
});

export default apiClient;
