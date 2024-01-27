import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpRequest {
  private instance: AxiosInstance | undefined;

  constructor(requeseConfig: AxiosRequestConfig) {
    this.instance = axios.create(requeseConfig);

    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        console.log('request intercept', config);
        // token
        config.headers.Authorization = String(window.localStorage.getItem('token'));
        return config;
      },
      (error) => {
        console.log('request intercept error', error);
      }
    );

    // 全局响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        console.log('response intercept', res);
        return res.data;
      },
      (error) => {
        console.log('response intercept error');
        console.log(error.request);
        console.log(error.response);
        return error;
      }
    );
  }

  request<T>(config: AxiosRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance
        ?.request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export { HttpRequest };
