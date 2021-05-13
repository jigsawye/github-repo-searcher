import { FC } from 'react';
import colors from 'github-colors';
import styled from 'styled-components';

const Circle = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 4px;
  border: 1px solid rgba(205, 217, 229, 0.2);
`;

interface LanguageColorProps {
  language: string;
}

const LanguageColor: FC<LanguageColorProps> = ({ language }) => {
  const { color } = colors.get(language);

  return <Circle style={{ backgroundColor: color }} />;
};

export { LanguageColor };
