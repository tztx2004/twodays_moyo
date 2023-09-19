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

    const endPoint = 'plans/22';

    const res = await httpMethod.GET(endPoint);

    expect(mockFetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_URL}/${endPoint}`, {
      method: 'get',
    });

    const data = await res.json();

    expect(data).toEqual(mockResponse);
  });
});
