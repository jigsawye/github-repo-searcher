import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import { Card } from '../RepositoryList/RepositoryCard';

const Skeleton: FC = () => {
  return (
    <Card>
      <ContentLoader height={90}>
        <rect x="0" y="8" rx="4" ry="4" width="160" height="20" />
        <rect x="0" y="42" rx="4" ry="4" width="320" height="16" />
        <rect x="0" y="72" rx="4" ry="4" width="100" height="16" />
        <rect x="110" y="72" rx="4" ry="4" width="140" height="16" />
      </ContentLoader>
    </Card>
  );
};

const Skeletons: FC = () => {
  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};

export { Skeletons };
