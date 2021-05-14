import { FC } from 'react';
import { GoOctoface } from 'react-icons/go';
import styled from 'styled-components';

const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
`;

interface EmptyStateProps {
  searchValue: string;
}

const EmptyState: FC<EmptyStateProps> = ({ searchValue }) => {
  return (
    <EmptyStateWrapper>
      <GoOctoface size={48} />
      <p>
        Sorry, we couldn’t find any repositories match &quot;{searchValue}&quot;
        :(
      </p>
    </EmptyStateWrapper>
  );
};

export { EmptyState };
