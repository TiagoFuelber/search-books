import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  body, h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  .center {
    text-align: center;
  }

  .upper {
    text-transform: uppercase;
  }

  .bold {
    font-weight: 800;
  }
`;
