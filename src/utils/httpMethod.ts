import httpClient from './httpClient';

class HttpMethod {
  GET(url: string, options = {}) {
    return httpClient.fetch(url, {
      method: 'get',
      ...options,
    });
  }

  POST(url: string, options = {}) {
    return httpClient.fetch(url, {
      method: 'post',
      ...options,
    });
  }
}

const httpMethod = new HttpMethod();

export default httpMethod;
