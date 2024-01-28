import type { InternalAxiosRequestConfig } from 'axios';
import { HttpRequest } from '../utils/httpRequest';

const httpRequest = new HttpRequest({
  baseURL: import.meta.env.VITE_API_DOMAIN,
  timeout: import.meta.env.VITE_API_TIME_OUT,
  interceptors: {
    requestInterceptors(config) {
      console.log('add token to head');
      config.headers.Authorization =
        'Bearer ' + String(window.localStorage.getItem('token'));
      return config;
    },
  },
});

export default httpRequest;
