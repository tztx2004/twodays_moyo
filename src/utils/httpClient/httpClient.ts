class HttpClient {
  #baseUrl = 'http://localhost:4000';

  fetch(url: string, options = {}) {
    return fetch(`${this.#baseUrl}/${url}`, {
      ...options,
    });
  }
}

const httpClient = new HttpClient();

export default httpClient;
