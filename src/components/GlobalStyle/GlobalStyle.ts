import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    body {
      position: relative;
      min-height: 100%;
      height: 100%;
      margin: 0;
      line-height: 1.65;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-weight: 400;
      min-width: 320px;
      background-color: rgb(250, 250, 250);
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background-color: #0070f3;
    color: #fff;
  }
`;

export { GlobalStyle };
