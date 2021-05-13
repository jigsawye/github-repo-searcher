import { FC } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid rgb(234, 234, 234);
  background-color: #fff;
`;

const StyledHeader = styled.header`
  width: 100%;
  max-width: 768px;
  padding: 0 1rem;
`;

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <h3>GitHub Repo Searcher</h3>
      </StyledHeader>
    </HeaderWrapper>
  );
};

export { Header };
