import { useEffect, useState } from 'react';

import httpMethod from '@/src/utils/httpMethod/httpMethod';

export default function useGetData<T>(endPoint: string): [T | undefined, boolean] {
  const [data, setData] = useState<T>();
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const res = await httpMethod.GET(endPoint);
      const fetchingData = await res.json();

      setData(() => fetchingData);
      setSuccess(() => true);
    })();
  }, [endPoint]);

  return [data, success];
}
