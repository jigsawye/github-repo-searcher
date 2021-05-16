import { GITHUB_SEARCH_REPOSITORY_URL } from '../constants';
import { Data } from '../types';

export const fetchWithSearchValue = async (
  page: number,
  searchValue: string
): Promise<Data> => {
  const response = await fetch(
    `${GITHUB_SEARCH_REPOSITORY_URL}&page=${page}&q=${searchValue}`
  );

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('API rate limit exceeded');
    }

    throw new Error('An error occurred while fetching the data');
  }

  const data = await response.json();

  return data as Data;
};
