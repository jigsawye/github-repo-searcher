import { FC } from 'react';
import { useInView } from '../../hooks';

import { Repository } from '../../types';

import { RepositoryCard } from './RepositoryCard';

interface RepositoryListProps {
  repositories: Repository[];
  onLoadMore: () => void;
}

const RepositoryList: FC<RepositoryListProps> = ({
  repositories,
  onLoadMore,
}) => {
  const { ref } = useInView(onLoadMore);

  return (
    <div>
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
      <div ref={ref} />
    </div>
  );
};

export { RepositoryList };
