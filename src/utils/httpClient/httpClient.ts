class HttpClient {
  #baseUrl = process.env.NEXT_PUBLIC_URL;

  fetch(url: string, options = {}) {
    return fetch(`${this.#baseUrl}/${url}`, {
      ...options,
    });
  }
}

const httpClient = new HttpClient();

export default httpClient;
