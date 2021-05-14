import { useSWRInfinite } from 'swr';
import uniqBy from 'lodash.uniqby';

import { PER_PAGE, GITHUB_SEARCH_REPOSITORY_URL } from '../constants';
import { Data, Repository } from '../types';

import { useHasMounted } from './useHasMounted';

const fetchWithSearchValue = (page: number, searchValue: string) =>
  fetch(`${GITHUB_SEARCH_REPOSITORY_URL}&page=${page}&q=${searchValue}`).then(
    async (res) => {
      if (!res.ok) {
        if (res.status === 403) {
          throw new Error('API rate limit exceeded');
        }

        throw new Error('An error occurred while fetching the data');
      }

      return res.json();
    }
  );

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
        persistData && !hasMounted.current ? [persistData] : undefined,
      shouldRetryOnError: false,
    }
  );

  const data = typeof originalData !== 'number' ? originalData : [];
  const error = typeof originalError !== 'number' ? originalError : undefined;

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
    repositories: uniqBy(repositories, 'id'),
    loading,
    error,
    loadMore,
    revalidate,
  };
};

export { useGithubRepositoryFetcher };
