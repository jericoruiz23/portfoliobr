import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    margin-bottom: 1rem;
  }

  a {
    color: inherit;
  }

  /* Accessibility: Focus styles */
  *:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 2px;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyles;