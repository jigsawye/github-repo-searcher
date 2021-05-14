import { FC } from 'react';
import { GoStar, GoRepoForked, GoLinkExternal } from 'react-icons/go';
import styled from 'styled-components';

import { Repository } from '../../types';

import { LanguageColor } from './LanguageIcon';

const numberFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
});

export const Card = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  }
`;

const CardTitle = styled.a`
  display: inline-flex;
  align-items: center;
  color: #000;
  font-size: 1.1em;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const CardContentItem = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
`;

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard: FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <Card>
      <CardTitle href={repository.html_url} target="_blank" rel="noreferrer">
        {repository.full_name} <GoLinkExternal style={{ marginLeft: 4 }} />
      </CardTitle>

      <CardContent>{repository.description}</CardContent>
      <CardContent>
        <CardContentItem>
          <GoStar style={{ marginRight: 4 }} />
          {numberFormatter.format(repository.stargazers_count)}
        </CardContentItem>

        <CardContentItem>
          <GoRepoForked style={{ marginRight: 4 }} />
          {numberFormatter.format(repository.forks)}
        </CardContentItem>

        {repository.language && (
          <CardContentItem>
            <LanguageColor language={repository.language} />
            {repository.language}
          </CardContentItem>
        )}

        {repository.license && (
          <CardContentItem>{repository.license.name}</CardContentItem>
        )}
      </CardContent>
    </Card>
  );
};

export { RepositoryCard };
