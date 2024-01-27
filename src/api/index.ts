import { HttpRequest } from '../utils/httpRequest';

/* eslint-disable */
const httpRequest = new HttpRequest({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_TIME_OUT,
});

export default httpRequest;
