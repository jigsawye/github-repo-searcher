import Head from 'next/head';
import { FC } from 'react';

const defaultTitle = 'GitHub Repo Searcher';
const description =
  'A tool for searching github repositories, powered by next.js';
const siteUrl = 'http://github-repo-searcher.jigsawye.com/';

interface MetaDataProps {
  searchValue: string;
}

const MetaData: FC<MetaDataProps> = ({ searchValue }) => {
  const title = searchValue ? `${searchValue} · ${defaultTitle}` : defaultTitle;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default MetaData;
