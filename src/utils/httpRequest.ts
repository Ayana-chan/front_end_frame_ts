import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export interface InterceptorsArgs {
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  responseInterceptors?: <R = AxiosResponse>(config: R) => R;
  responseInterceptorsCatch?: (err: any) => any;
}

/**
 * customized args for both axios construction and request with optional interceptors
 */
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: InterceptorsArgs;
}

/**
 * Interceptors order: instance req -> global req -> global res -> instance res
 */
export class HttpRequest {
  // axios 实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: InterceptorsArgs;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;

    // global req
    this.instance.interceptors.request.use(
      (res: InternalAxiosRequestConfig) => {
        // console.log('Global Request Interceptor');
        return res;
      },
      (err: any) => err
    );

    // instance req
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );

    // instance res
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    );

    // global res
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // console.log('Global Response Interceptor');
        return res;
      },
      (err: any) => err
    );
  }

  /**
   * create a axios request with optional interceptors
   * @param config axios config with optional interceptors
   */
  request<R>(config: AxiosRequestConfig): Promise<R> {
    // warn when GET request with `data`
    const { method = 'GET' } = config;
    if (method === 'get' || method === 'GET') {
      if (config.params === null && config.data !== null) {
        console.warn('WARN: GET request with `data` instead of `param`.');
      }
    }

    return this.instance.request<any, R>(config);
  }
}

export interface StandardResponse<T> {
  code: number;
  message: string;
  data: T;
}
