import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useSyncRouteQuery = (value: string): void => {
  const { query, push, isReady } = useRouter();

  useEffect(() => {
    if (isReady && value !== query.q) {
      const url = {
        href: '/',
        query: {
          q: value,
        },
      };

      push(url, url, { shallow: true });
    }
  }, [isReady, value, query.q]);
};

export { useSyncRouteQuery };
