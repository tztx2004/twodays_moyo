import httpClient from '../httpClient/httpClient';

class HttpMethod {
  GET(url: string, options = {}) {
    return httpClient.fetch(url, {
      method: 'get',
      ...options,
    });
  }
}

const httpMethod = new HttpMethod();

export default httpMethod;
