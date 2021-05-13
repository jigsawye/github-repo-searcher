import { FC } from 'react';
import { GoStar, GoRepoForked, GoLinkExternal } from 'react-icons/go';
import styled from 'styled-components';

import { Repository } from '../../types';

import { LanguageColor } from './LanguageIcon';

const numberFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
});

const Card = styled.div`
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
  repo: Repository;
}

const RepositoryCard: FC<RepositoryCardProps> = ({ repo }) => {
  return (
    <Card>
      <CardTitle href={repo.html_url} target="_blank" rel="noreferrer">
        {repo.full_name} <GoLinkExternal style={{ marginLeft: 4 }} />
      </CardTitle>

      <CardContent>{repo.description}</CardContent>
      <CardContent>
        <CardContentItem>
          <GoStar style={{ marginRight: 4 }} />
          {numberFormatter.format(repo.stargazers_count)}
        </CardContentItem>

        <CardContentItem>
          <GoRepoForked style={{ marginRight: 4 }} />
          {numberFormatter.format(repo.forks)}
        </CardContentItem>

        {repo.language && (
          <CardContentItem>
            <LanguageColor language={repo.language} />
            {repo.language}
          </CardContentItem>
        )}

        {repo.license && <CardContentItem>{repo.license.name}</CardContentItem>}
      </CardContent>
    </Card>
  );
};

export { RepositoryCard };
