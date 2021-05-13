import { FC } from 'react';
import styled from 'styled-components';

import { InputPrefix, InputPrefixWrapper } from './InputPrefix';

const SearchBarWrapper = styled.label`
  display: flex;
  flex-direction: row-reverse;
  margin: 24px 0;
`;

const Input = styled.input`
  font-size: 100%;
  width: 100%;
  min-width: 0;
  display: inline-flex;
  appearance: none;
  border: 1px solid;
  border-color: rgb(234, 234, 234);
  border-left: 0;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0;
  padding-right: 12px;
  background: #fff;
  color: #000;
  height: 2.5rem;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: rgb(102, 102, 102);

    & + ${InputPrefixWrapper} {
      border-color: rgb(102, 102, 102);
    }
  }
`;

const SearchBar: FC = () => {
  return (
    <SearchBarWrapper>
      <Input placeholder="Search Repository..." />
      <InputPrefix />
    </SearchBarWrapper>
  );
};

export { SearchBar };
