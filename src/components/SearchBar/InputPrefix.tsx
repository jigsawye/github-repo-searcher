import { FC } from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

const InputPrefixWrapper = styled.span`
  border: 1px solid;
  border-color: rgb(234, 234, 234);
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #fff;
  height: 2.5rem;
  padding: 0 12px;
  display: flex;
  align-items: center;
  transition: border-color 0.15s ease;
`;

const InputPrefix: FC = () => (
  <InputPrefixWrapper>
    <GoSearch />
  </InputPrefixWrapper>
);

export { InputPrefixWrapper, InputPrefix };
