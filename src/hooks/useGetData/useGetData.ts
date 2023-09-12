import { useEffect, useState } from 'react';

import httpMethod from '@/src/utils/httpMethod/httpMethod';

export default function useGetData<T>(endPoint: string) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      const res = await httpMethod.GET(endPoint);
      const fetchingData = await res.json();

      setData(() => fetchingData);
    })();
  }, [endPoint]);

  return data;
}
