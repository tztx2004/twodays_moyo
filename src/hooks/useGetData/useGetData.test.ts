import { renderHook, waitFor } from '@testing-library/react';

import useGetData from './useGetData';
import { plans } from '../../fixtures/plans';
import httpMethod from '@/src/utils/httpMethod/httpMethod';

test('useGetData', async () => {
  const responseData = plans;

  // 모의 객체를 통해 GET 함수의 결과를 설정합니다.
  httpMethod.GET = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(responseData),
  });

  const { result } = renderHook(() => useGetData(`plans/1`));

  expect(result.current).toBeUndefined();

  await waitFor(() => {
    expect(result.current).toEqual(plans);
  });
});
