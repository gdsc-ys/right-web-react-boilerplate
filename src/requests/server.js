import axios from 'axios';

const server = axios.create({
  withCredentials: true,
});

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  server.defaults.baseURL = 'http://localhost:8000';
} else {
  server.defaults.baseURL = 'https://api.gdsc-yonsei.com';
}

export default server;
