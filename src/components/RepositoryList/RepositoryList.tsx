import { FC } from 'react';

import { items } from '../../mock';

import { RepositoryCard } from './RepositoryCard';

const RepositoryList: FC = () => {
  return (
    <div>
      {items.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export { RepositoryList };
