import httpMethod from './httpMethod';

describe('httpMethod', () => {
  it('GET 함수 테스트', async () => {
    const mockResponse = {
      test: [
        {
          t1: 'test1',
        },
        { t2: 'test2' },
      ],
    };

    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    window.fetch = mockFetch;

    const endPoint = 'tests';

    const res = await httpMethod.GET(endPoint);

    expect(mockFetch).toHaveBeenCalledWith(`http://localhost:4000/${endPoint}`, { method: 'get' });

    const data = await res.json();

    expect(data).toEqual(mockResponse);
  });
});
