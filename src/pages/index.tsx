import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { ChangeEventHandler, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { GITHUB_SEARCH_REPOSITORY_URL } from '../constants';
import { Header, Main } from '../components/Layout';
import { RepositoryList } from '../components/RepositoryList';
import { RevalidateButton } from '../components/RevalidateButton';
import { SearchBar } from '../components/SearchBar';
import { Skeletons } from '../components/Skeletons';
import {
  useResetScrollTop,
  useSyncRouteQuery,
  useGithubRepositoryFetcher,
} from '../hooks';
import { Data } from '../types';
import MetaData from '../components/MetaData/MetaData';

interface HomeProps {
  // eslint-disable-next-line camelcase
  persistData: Data | null;
  persistQueryValue: string | null;
}

const Home: NextPage<HomeProps> = ({ persistData, persistQueryValue }) => {
  const [value, setValue] = useState(persistQueryValue ?? '');
  const [searchValue] = useDebounce(value, 500);

  const { repositories, loading, loadMore, error, revalidate } =
    useGithubRepositoryFetcher(searchValue, persistData);

  useResetScrollTop();
  useSyncRouteQuery(searchValue);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!loading) {
      setValue(event.target.value);
    }
  };

  const handleLoadMore = () => {
    if (!loading && !error) {
      loadMore();
    }
  };

  return (
    <>
      <MetaData searchValue={searchValue} />

      <Header />
      <Main>
        <SearchBar value={value} onChange={handleInputChange} />
        {repositories.length !== 0 && (
          <RepositoryList
            repositories={repositories}
            onLoadMore={handleLoadMore}
          />
        )}
        {loading && <Skeletons />}
        {error && <RevalidateButton error={error} onClick={revalidate} />}
      </Main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const queryValue = (context.query.q ?? null) as string | null;

  let persistData = null;

  if (queryValue) {
    const response = await fetch(
      `${GITHUB_SEARCH_REPOSITORY_URL}&q=${queryValue}`
    );
    const data = (await response.json()) as Data;

    if (data) {
      persistData = data;
    }
  }

  return {
    props: {
      persistQueryValue: queryValue,
      persistData,
    },
  };
};
