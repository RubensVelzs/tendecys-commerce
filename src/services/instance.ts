import axios, { AxiosHeaders } from 'axios';
import { REACT_NATIVE_API_TOKEN } from '@env';

const instance = axios.create({
  baseURL: 'https://eshop-deve.herokuapp.com/api/v2',
 
});

instance.interceptors.request.use((config) => {
  (config.headers as AxiosHeaders).set(
    'Authorization',
    `Bearer ${REACT_NATIVE_API_TOKEN}`
  );
  return config;
});

export default instance;
