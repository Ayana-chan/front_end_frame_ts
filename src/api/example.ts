import httpRequest from '.';

export default class ExampleApi {
  static exampleRequest(param: any) {
    return httpRequest.request({
      url: '/api/exmaple',
      method: 'GET',
      params: param,
      interceptors: {
        requestInterceptors(config) {
          console.log('Local Request Interceptor');
          return config;
        },
        responseInterceptors(err) {
          console.log('Local Response Interceptor');
          return err;
        },
      },
    });
  }
}
