import httpRequest from '.';

export default class ExampleApi {
  static exampleRequest(param: any) {
    return httpRequest.request({
      url: '/api/exmaple',
      method: 'GET',
      params: param,
    });
  }
}
