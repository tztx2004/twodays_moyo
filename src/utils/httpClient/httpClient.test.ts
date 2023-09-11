import httpClient from './httpClient';

describe('httpClient', () => {
  it('HttpClient 클래스의 fetch 메서드는 promise를 반환한다.', async () => {
    const mockResponse = {
      sick: [
        {
          sickCd: 'A11',
          sickNm: '콜레라',
        },
        {
          sickCd: 'A01',
          sickNm: '장티푸스 및 파라티푸스',
        },
      ],
    };

    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    window.fetch = mockFetch;

    const url = 'tests';
    const options = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await httpClient.fetch(url, options);

    expect(mockFetch).toHaveBeenCalledWith(`http://localhost:4000/${url}`, options);

    const data = await res.json();

    expect(data).toEqual(mockResponse);
  });
});
