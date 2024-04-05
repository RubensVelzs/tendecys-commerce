import axios, { AxiosHeaders } from 'axios';

const instance = axios.create({
  baseURL: 'https://eshop-deve.herokuapp.com/api/v2',
 
});

instance.interceptors.request.use((config) => {
  (config.headers as AxiosHeaders).set(
    'Authorization',
    `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqNENWdUR6R0RpQTJzeHUwWVlPWW5kaUU0WGtvbnNGYiIsImlhdCI6MTY3NDU4NjI5OTUyN30.W01xe4zYHPf8-n8KlW_OnPe8anXZFzNPLIHHmmYTsDCBIeVqTYhbbYxHvRW3HTrN3nnwD9CSvbnFpvC_655UAQ`
  );
  return config;
});

export default instance;
