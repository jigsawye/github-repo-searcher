import { FC } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid rgb(234, 234, 234);
  background-color: #fff;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  max-width: 768px;
  padding: 0 1rem;
`;

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <h3 style={{ margin: 0 }}>GitHub Repo Searcher</h3>

        <a
          style={{ display: 'inline-flex', marginLeft: 'auto', color: '#000' }}
          href="https://github.com/jigsawye/github-repo-searcher"
          target="_blank"
          rel="noreferrer"
        >
          <GoMarkGithub size={24} />
        </a>
      </StyledHeader>
    </HeaderWrapper>
  );
};

export { Header };
