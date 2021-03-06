import { useSWRInfinite } from 'swr';
import uniqBy from 'lodash.uniqby';

import { PER_PAGE } from '../constants';
import { Data, Repository } from '../types';

import { useHasMounted } from './useHasMounted';
import { fetchWithSearchValue } from '../utils/fetchWithSearchValue';

const useGithubRepositoryFetcher = (
  searchValue: string,
  persistData: Data | null
): {
  repositories: Repository[];
  loading: boolean;
  loadMore: () => void;
  error: Error;
  revalidate: () => void;
} => {
  const hasMounted = useHasMounted();
  const {
    data: originalData,
    error: originalError,
    size,
    setSize,
    revalidate,
  } = useSWRInfinite<Data>(
    (index, previousPageData) => {
      if (!searchValue) {
        return null;
      }

      if (previousPageData && !previousPageData.items) {
        return null;
      }

      return [index + 1, searchValue];
    },
    fetchWithSearchValue,
    {
      initialData:
        // only persist initialData on first time render
        persistData && !hasMounted.current ? [persistData] : undefined,
      shouldRetryOnError: false,
    }
  );

  const data = typeof originalData !== 'number' ? originalData : [];
  const error = typeof originalError !== 'number' ? originalError : undefined;

  // reduce the data items
  const repositories =
    data?.reduce<Repository[]>(
      (acc, curr) => ('items' in curr ? [...acc, ...curr.items] : acc),
      []
    ) ?? [];

  const loading = Boolean(
    !error &&
      searchValue &&
      (!data ||
        (size > 0 &&
          typeof data !== 'undefined' &&
          typeof data[size - 1] === 'undefined'))
  );

  const loadMore = () => {
    if (data && data[size - 1].total_count > size * PER_PAGE) {
      setSize((prev) => prev + 1);
    }
  };

  return {
    // The github api sometimes return duplicate data on difference page
    repositories: uniqBy(repositories, 'id'),
    loading,
    error,
    loadMore,
    revalidate,
  };
};

export { useGithubRepositoryFetcher };
