import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
`;
